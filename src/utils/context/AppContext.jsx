import { createContext, useReducer } from "react";
// import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/AppReducer";
import { app } from "./config";

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
    inLot: [
      {
        uid: "acura-2013-9875",
        make: "Acura",
        model: "TL Advance",
        year: 2013,
        price: 9875,
        photos: [],
        features: [
          {
            bodyStyle: "sedan",
            engine: "3.5L",
            cylinders: "6-Cylinder",
            driveTrain: "FWD",
            transmission: "Automatic 6-Speed",
            color: "black",
            mileage: 152000,
            doors: "4D",
            stockNumber: 0,
          },
        ],
        comments:
          "2013 Acura TL Advance FWD, 6-Cylinder Auto, 3.5L, Leather Seats, 152k Miles, Bluetooth, Backup Camera, Push-Start, Heated/Cooled Seats, Sunroof, Memory Seats,  Traction Control, Aux Audio Connection, Rear Window Defroster. P/w P/dl P/m. Special Finance Available Bad Credit, No Problem! 713-780-1616. Se Habla Espanol, No Credit, No Social Security Number Ok! Nosotros Financiamos!  www.swauto59.com      ",
        optionsInstalled: "",
      },
      {
        uid: "bmw-2013-15750",
        make: "BMW",
        model: "750 Li",
        year: 2013,
        price: 15750,
        photos: [],
        features: [
          {
            bodyStyle: "sedan",
            engine: "4.4L",
            cylinders: "8 Cylinder Turbo",
            driveTrain: "Rear Wheel Drive",
            transmission: "Automatic 8-Speed",
            color: "white",
            mileage: 61000,
            doors: "4D",
            stockNumber: 0,
          },
        ],
        comments:
          "2013 BMW 750Li RWD, 8-Cylinder Turbo Auto, 4.4L, 61k Miles, Sunroof, Leather Seats, Memory Seats, Navigation, Heated Seats, Heads Up Display, Rear Window Defroster, P/Steering Wheel Adjuster, P/w PDL P/m P/s A/C Am Fm CD Tilt Cruise. Special Finance Available. No Credit Bad Credit, No Driver License, No Social Security, No Problem! We finance 713-780-1616. Se Habla Espanol! $2,250 Down + Tax TL. www.swauto59.com ",
        optionsInstalled: "",
      },
    ],
    selected: {},
    disclaimer:
      "** Photos are for illustrative purposes only. Not responsible for errors or omissions. **",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // useEffect(() => {
  //   // getAllAssets();
  // }, []);
  // const getAssets = async () => {
  //   try {
  //     const { data } = await axiosWithAuth.get("/app/glamourella");
  //     dispatch({ type: "LOAD_CONTENT", payload: data });
  //   } catch (error) {
  //     dispatch({ type: "LOAD_CONTENT", payload: glamourella });
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.data });
  //   }
  // };
  // const getAllAssets = async () => {
  //   dispatch({ type: "IS_LOADING", payload: true });
  //   try {
  //     const { data } = await axiosWithAuth.get("/gallery/all?path=assets");
  //     console.log("data", data);
  //     dispatch({ type: "LOAD_ASSETS", payload: data });
  //   } catch (err) {
  //     const data = err.response.data;
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
  //   }
  // };
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
    const data = {
      ...method,
      title: `Payment type: ${method.name}`,
    };
    dispatch({ type: "SELECT_PAYMENT_TYPE", payload: data });
  };
  const readyCheckout = (paymentType, user, cart) => {
    console.log("paymentType, user, cart", paymentType, user, cart);
  };
  const seeDetails = (data) => {
    dispatch({ type: "UPDATE_SELECTED", payload: data });
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
        inLot: state.inLot,
        selected: state.selected,
        paymentType: state.paymentType,
        disclaimer: state.disclaimer,
        updateBurger,
        updateMenu,
        newsletter,
        selectPaymentType,
        readyCheckout,
        seeDetails,
      }}>
      {children}
    </AppContext.Provider>
  );
};
