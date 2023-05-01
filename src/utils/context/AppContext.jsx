import { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/AppReducer";
import { app } from "./config";
import { useNavigate } from "react-router-dom";
import { vehicles, randomMileague, randomPrice } from "./variables";
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
    disclaimer:
      "** Photos are for illustrative purposes only. Not responsible for errors or omissions. **",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    getCarAssets();
  }, []);
  // const getAssets = async () => {
  //   try {
  //     const { data } = await axiosWithAuth.get("/app/glamourella");
  //     dispatch({ type: "LOAD_CONTENT", payload: data });
  //   } catch (error) {
  //     dispatch({ type: "LOAD_CONTENT", payload: glamourella });
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.data });
  //   }
  // };
  const getCarAssets = async () => {
    try {
      const res = await axiosWithAuth.get("/Car_Model_List?limit=20");
      // restructure data
      let filters = [];
      const data = res.data.results.map(
        ({ Make, Year, Model, Category, objectId }) => {
          const dummyData = {
            make: Make,
            year: Year,
            model: Model,
            category: Category,
          };
          filters.push(dummyData);
          // load dummy data
          return {
            ...dummyData,
            mileage: randomMileague(),
            price: randomPrice(),
            vin: objectId,
            photos: vehicles[Make.toLowerCase()],
          };
        }
      );
      loadFilters(filters);
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
    filters.price = [5000, 10000];
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
  const updateFilter = (data, appliedFilters) => {
    const lot = data.filter((d) => {
      if (appliedFilters.some((af) => af.hasList)) {
        return appliedFilters.some((af) => {
          return af.list.some((l) => {
            return Object.keys(l).some((lKey) => l[lKey] === d[lKey]);
          });
        });
      } else {
        return appliedFilters.some((f) => {
          return Object.keys(f).some((keys) => f[keys] === d[keys]);
        });
      }
    });
    dispatch({ type: "UPDATE_FILTER", payload: lot });
  };
  const updateAppliedFilter = (filters, { key, value }) => {
    const entry = { [key]: value, type: key, key: shortid.generate() };
    if (filters.some((af) => key === af.type)) {
      console.log("filters", filters);
      const data = filters.map((f) => {
        if (f.hasList) {
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
          return { ...f, hasList: true, list: [...f.list, entry] };
        }
      });
      if (data[0] === undefined) {
        filters = [];
      } else {
        dispatch({ type: "UPDATE_APPLIED_FILTER", payload: data });
      }
    } else {
      filters.push({ ...entry, hasList: false, list: [entry] });
      dispatch({ type: "UPDATE_APPLIED_FILTER", payload: filters });
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
