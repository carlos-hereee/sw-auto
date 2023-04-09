import { createContext, useReducer } from "react";
import { reducer } from "../reducers/AppReducer";
import { app } from "./config";

export const ServiceContext = createContext();

export const ServiceState = ({ children }) => {
  const initialState = {
    isLoading: false,
    services: app.services,
    selected: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const seeDetails = (data) => {
    dispatch({ type: "UPDATE_SELECTED", payload: data });
  };
  return (
    <ServiceContext.Provider
      value={{
        isLoading: state.isLoading,
        selected: state.selected,
        seeDetails,
      }}>
      {children}
    </ServiceContext.Provider>
  );
};
