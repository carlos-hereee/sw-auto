import { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/AppReducer";
import { app } from "./config";
import { useNavigate } from "react-router-dom";
import {
  acura,
  audi,
  bmw,
  buick,
  cadillac,
  chevy,
  chrysler,
  ford,
  infinity,
  randomMileague,
  randomPrice,
} from "./variables";
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
    activeFilter: [],
    filtered: [],
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
      const result = res.data.results.map((d) => {
        // load dummy data
        d.year = d.Year;
        d.make = d.Make;
        d.model = d.Model;
        d.category = d.Category;
        d.mileage = randomMileague();
        d.price = randomPrice();
        if (d.Make.toLowerCase() === "audi") {
          d.photos = audi;
        }
        if (d.Make.toLowerCase() === "chevrolet") {
          d.photos = chevy;
        }
        if (d.Make.toLowerCase() === "cadillac") {
          d.photos = cadillac;
        }
        if (d.Make.toLowerCase() === "acura") {
          d.photos = acura;
        }
        if (d.Make.toLowerCase() === "bmw") {
          d.photos = bmw;
        }
        if (d.Make.toLowerCase() === "chrysler") {
          d.photos = chrysler;
        }
        if (d.Make.toLowerCase() === "infiniti") {
          d.photos = infinity;
        }
        if (d.Make.toLowerCase() === "ford") {
          d.photos = ford;
        }
        if (d.Make.toLowerCase() === "buick") {
          d.photos = buick;
        }
        return d;
      });
      loadFilters(result);
      dispatch({ type: "LOAD_CAR_ASSETS", payload: result });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  const loadFilters = (arr) => {
    let filters = { year: [], make: [], category: [], mileage: [] };
    arr.forEach((l) => {
      const idx = filters.make.findIndex((i) => i.make === l.make);
      let current = filters.make[idx];

      if (!filters.year.includes(l.year)) {
        filters.year.push(l.year);
      }
      // if index is not found add record to dataset
      if (idx === -1) {
        filters.make.push({ make: l.make, model: [l.model] });
      }
      // if index is found check if model has been checked
      if (idx >= 0 && !current.model.includes(l.model)) {
        current.model.push(l.model);
      }
      if (!filters.mileage.includes(l.mileage)) {
        filters.mileage.push(l.mileage);
      }
      if (!filters.category.includes(l.category)) {
        filters.category.push(l.category);
      }
    });
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
  const updateFilter = (lot, activeFilters, keyword) => {
    if (keyword) {
      const data = lot.filter(
        (l) =>
          Object.keys(l).filter((f) => l[f].toString().includes(keyword)).length > 1
      );
      dispatch({ type: "UPDATE_FILTER", payload: data });
    } else dispatch({ type: "RESET_FILTER", payload: lot });
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
        isFiltered: state.isFiltered,
        updateBurger,
        updateMenu,
        newsletter,
        selectPaymentType,
        readyCheckout,
        seeDetails,
        resetSelect,
        updateFilter,
      }}>
      {children}
    </AppContext.Provider>
  );
};
