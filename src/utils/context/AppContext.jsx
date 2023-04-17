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
      let data = res.data.results;
      const result = data.map((d) => {
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
      // console.log(result);
      dispatch({ type: "LOAD_CAR_ASSETS", payload: result });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
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
  // const viewControl = (dir) => {

  // };
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
        updateBurger,
        updateMenu,
        newsletter,
        selectPaymentType,
        readyCheckout,
        seeDetails,
        resetSelect,
        // viewControl,
      }}>
      {children}
    </AppContext.Provider>
  );
};
