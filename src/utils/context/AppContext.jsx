import { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/AppReducer";
import { app } from "./config";
import { useNavigate } from "react-router-dom";
import {
  vehicles,
  randomMileague,
  randomPrice,
  minPrice,
  getRandomArr,
  engines,
  driveTrain,
  doors,
  color,
  fuel,
  cylinders,
} from "./variables";
import shortid from "shortid";
// import shortid from "shortid";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    menu: app.menu,
    schedule: app.schedule,
    socials: app.socials,
    about: app.about,
    services: app.services,
    gallery: app.gallery,
    checkout: app.checkout,
    contact: app.contact,
    footerNewsletter: app.footerNewsletter,
    paymentMethods: app.paymentMethods,
    burger: { notification: 0 },
    paymentType: {},
    lot: app.lot,
    selected: {},
    isFiltered: false,
    appliedFilters: [],
    filtered: [],
    filtered: [],
    filterToggle: false,
    brands: [],
    disclaimer:
      "** Photos are for illustrative purposes only. Not responsible for errors or omissions. **",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    getCarAssets();
  }, []);

  const getCarAssets = async () => {
    try {
      const res = await axiosWithAuth.get("/Car_Model_List?limit=20");
      // restructure data
      let filters = [];
      let brands = [];
      const data = res.data.results.map(
        ({ Make, Year, Model, Category, objectId }) => {
          const dummyData = { make: Make, year: Year, category: Category };
          filters.push(dummyData);
          // load dummy data
          return {
            ...dummyData,
            mileage: randomMileague(),
            price: randomPrice(),
            model: Model,
            vin: objectId,
            photos: vehicles[Make.toLowerCase()],
            features: [
              {
                engines: getRandomArr(engines),
                driveTrain: getRandomArr(driveTrain),
                doors: getRandomArr(doors),
                fuel: getRandomArr(fuel),
                cylinders: getRandomArr(cylinders),
                colorOutside: getRandomArr(color),
                colorInside: getRandomArr(color),
              },
            ],
          };
        }
      );
      for (let i = 0; i < data.length; i++) {
        const current = data[i];
        if (brands[current.make]) {
          let some = brands[current.make].filter((b) => b === current.model);
          if (!some[0]) {
            brands[current.make].push(current.model);
          }
        } else {
          brands[current.make] = [current.model];
        }
      }

      loadFilters(filters);
      dispatch({ type: "LOAD_CAR_BRANDS", payload: brands });
      dispatch({ type: "LOAD_CAR_ASSETS", payload: data });
    } catch (err) {
      console.log("err", err);
      // const data = err.response.data;
      // dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  const loadFilters = (arr) => {
    let filters = {};
    arr.forEach((a) => {
      // if f == brand then a[f] == acura
      Object.keys(a).filter((f) => {
        // if filter option exist
        if (filters[f]) {
          if (!filters[f].some((s) => s === a[f])) {
            filters[f].push(a[f]);
          }
        }
        // if filter option does not exist add it to the filter arr
        if (!filters[f]) {
          filters[f] = [a[f]];
        }
      });
    });
    const min = minPrice(20, 1500);
    filters.minPrice = min;
    filters.maxPrice = min;
    filters.mileage = [25000, 50000, 75000, 100000, 150000, 200000];
    dispatch({ type: "LOAD_FILTERS", payload: filters });
  };
  const updateBurger = (payload) => {
    dispatch({ type: "UPDATE_BURGER", payload: payload });
  };
  const updateMenu = (payload) => {
    dispatch({ type: "UPDATE_MENU", payload: payload });
  };
  const newsletter = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/newsletter", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const selectPaymentType = (method) => {
    const data = { ...method, title: `Payment type: ${method.name}` };
    dispatch({ type: "SELECT_PAYMENT_TYPE", payload: data });
  };
  const readyCheckout = (paymentType, user, cart) => {
    console.log("paymentType, user, cart", paymentType, user, cart);
  };
  const seeDetails = (data) => {
    dispatch({ type: "UPDATE_SELECTED", payload: data });
    navigate("/vehicle");
  };
  const resetSelect = () => {
    dispatch({ type: "RESET_SELECTED", payload: {} });
  };
  const resetFilter = (lot) => {
    dispatch({ type: "RESET_FILTER", payload: lot });
  };

  const filterInRange = (arr, min, max) => {
    return arr.filter((a) => min < a.price && a.price < max);
  };
  const filterByCategory = (arr, conditon) => {
    return arr.filter((a) => {
      for (let b = 0; b < conditon.length; b++) {
        const current = conditon[b];
        const category = conditon[b].type;
        if (a[category] === current[category]) {
          return true;
        }
      }
    });
  };
  const updateFilter = (arr, appliedFilters) => {
    let conditions = [];
    let price = {};
    let brands = [];

    for (let af = 0; af < appliedFilters.length; af++) {
      const input = appliedFilters[af];
      if (input.type === "minprice" || input.type === "maxprice") {
        price[input.type] = parseInt(input[input.type]);
      } else if (input.type === "model") {
        brands.push(...input.list);
      } else conditions.push(...input.list);
    }
    // if price filter  has value
    if (price.minprice || price.maxprice) {
      const { minprice, maxprice } = price;
      arr = filterInRange(arr, minprice || 0, maxprice || 999999);
    }
    // if models models are to be checked
    if (brands.length > 0) {
      arr = filterByCategory(arr, brands);
    }
    // check other filters
    if (conditions.length > 0) {
      arr = filterByCategory(arr, conditions);
    }
    dispatch({ type: "UPDATE_FILTER", payload: arr });
  };
  const getList = (arr, key) => arr.filter((a) => a.type === key).pop();

  const updateAppliedFilter = (applied, { key, value }) => {
    let entry = { [key]: value, type: key, key: shortid.generate() };
    let list = getList(applied, key);

    if (list === undefined) {
      // model does not exist add to applied filters
      applied.push({ ...entry, list: [entry] });
    } else if (key === "maxprice" || key === "minprice") {
      list = { ...entry, list: [entry] };
    } else if (key === "model") {
      // check models filter is active
      const isMatch = list.list.filter((a) => a[key] === value).pop();
      // if exist remove from applied filters
      const idx = applied.findIndex((a) => a.type === key);
      if (isMatch === undefined) {
        // entry does not exist.
        applied[idx].list.length > 0
          ? applied[idx].list.push(entry)
          : (applied[idx].list = [
              { [key]: applied[idx][key], type: key, key: shortid.generate() },
              entry,
            ]);
      } else {
        const excludeList = list.list.filter((a) => a[key] !== value);
        if (excludeList.length === 0) {
          applied.pop(idx);
        }
        applied.map((a) => a.type === key && (a.list = excludeList));
        return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
      }
    } else {
      const isMatch = list.list.some((f) => f[key] === value);
      if (isMatch) {
        const idx = list.list.findIndex((l) => l[key] === value);
        list.list.pop(idx);
        if (!list.list.length) {
          return dispatch({ type: "RESET_FILTER", payload: [] });
        }
      } else {
        list.list.push({ ...entry, list: [(prev) => prev, entry] });
      }
    }
    dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
  };
  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        socials: state.socials,
        about: state.about,
        services: state.services,
        menu: state.menu,
        schedule: state.schedule,
        burger: state.burger,
        gallery: state.gallery,
        checkout: state.checkout,
        contact: state.contact,
        footerNewsletter: state.footerNewsletter,
        app: state.app,
        paymentMethods: state.paymentMethods,
        lot: state.lot,
        selected: state.selected,
        paymentType: state.paymentType,
        disclaimer: state.disclaimer,
        filters: state.filters,
        filtered: state.filtered,
        appliedFilters: state.appliedFilters,
        isFiltered: state.isFiltered,
        filterToggle: state.filterToggle,
        brands: state.brands,
        updateBurger,
        updateMenu,
        newsletter,
        selectPaymentType,
        readyCheckout,
        seeDetails,
        resetSelect,
        updateFilter,
        updateAppliedFilter,
        resetFilter,
      }}>
      {children}
    </AppContext.Provider>
  );
};
