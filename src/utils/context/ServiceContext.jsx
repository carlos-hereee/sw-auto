import { createContext, useReducer } from "react";
import { reducer } from "../reducers/ServiceReducer";
import { app } from "./config";

export const ServiceContext = createContext();

export const ServiceState = ({ children }) => {
  const initialState = {
    isLoading: false,
    services: app.services,
    selected: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ServiceContext.Provider
      value={{
        isLoading: state.isLoading,
        selected: state.selected,
      }}>
      {children}
    </ServiceContext.Provider>
  );
};
