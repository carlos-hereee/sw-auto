import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import { ServiceState } from "./utils/context/ServiceContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <ServiceState>
          <App />
        </ServiceState>
      </AppState>
    </BrowserRouter>
  </React.StrictMode>
);
