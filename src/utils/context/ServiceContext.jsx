import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/ServiceReducer";
import { app } from "./config";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export const ServiceContext = createContext();

export const ServiceState = ({ children }) => {
  const initialState = {
    isLoading: false,
    services: app.services,
    selected: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selected } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (selected.uid) {
      navigate("/vehicle");
    }
  }, [selected]);

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
