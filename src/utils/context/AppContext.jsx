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
    activeFilter: [],
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
  const updateFilter = (arr, appliedFilters) => {
    let lot = arr;
    // console.log('app', app)
    for (let i = 0; i < appliedFilters.length; i++) {
      // traverse list of appliedFilters
      const current = appliedFilters[i];
      // traverse each list
      for (let c = 0; c < current.list.length; c++) {
        const value = current.list[c];
        const category = value.type;
        // filter arr
        const filter = lot.filter((d) => {
          if (d[category]) {
            return d[category] === value[category];
          }
        });
        console.log("filter", filter);
        lot = filter;
      }
    }
    dispatch({ type: "UPDATE_FILTER", payload: lot });
  };
  const getList = (arr, key) => arr.filter((a) => a.type === key).pop();

  const updateAppliedFilter = (applied, { key, value }) => {
    let entry = { [key]: value, type: key, key: shortid.generate() };
    if (key === "models") {
      // check models filter is active
      if (getList(applied, key) === undefined) {
        // model does not exist add to applied filters
        applied.push({ ...entry, list: [entry] });
        return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
      } else {
        const isMatch = getList(applied, key)
          .list.filter((a) => a[key] === value)
          .pop();
        // if exist remove from applied filters
        const idx = applied.findIndex((a) => a.type === key);
        if (isMatch === undefined) {
          // entry does not exist.
          if (applied[idx].list.length > 0) {
            applied[idx].list.push(entry);
          } else {
            // no items in list
            applied[idx].list = [
              {
                [key]: applied[idx][key],
                type: key,
                key: shortid.generate(),
              },
              entry,
            ];
            return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
          }
          return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
        } else {
          const list = getList(applied, key).list.filter((a) => a[key] !== value);
          if (list.length === 0) {
            applied.pop(idx);
          }
          applied.map((a) => a.type === key && (a.list = list));
          return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
        }
      }
    } else if (applied.some((af) => key === af.type)) {
      const data = applied.map((f) => {
        if (f.list.length > 0) {
          const list = f.list.filter((l) => {
            let keys = Object.keys(l).filter((i) => l[i] === value);
            return l[keys] !== value;
          });
          return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: list });
        }
        if (f[key] === value) {
          return dispatch({ type: "UPDATE_APPLIED_FILTER", payload: [] });
        }
        if (f[key] !== value) {
          return { ...f, list: [...f.list, entry] };
        }
      });
      if (data[0] === undefined) {
        applied = [];
      } else {
        dispatch({ type: "UPDATE_APPLIED_FILTER", payload: data });
      }
    } else {
      applied.push({ ...entry, list: [entry] });
      dispatch({ type: "UPDATE_APPLIED_FILTER", payload: applied });
    }
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
        activeFilter: state.activeFilter,
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
