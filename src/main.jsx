import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import ErrorPage from "./pages/ErrorPage";
import Cars from "./pages/Cars";
import Vehicle from "./component/Vehicle";
import Boats from "./pages/Boats";
import RvAtv from "./pages/RvAtv";
import ContactUs from "./pages/ContactUs";
import { ServiceState } from "./utils/context/ServiceContext";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter(
//   // routesList
//   [
//     { path: "/", element: <App />, errorElement: <ErrorPage /> },
//     { path: "cars", element: <Cars />, errorElement: <ErrorPage /> },
//     { path: "vehicle", element: <Vehicle />, errorElement: <ErrorPage /> },
//     { path: "boats", element: <Boats />, errorElement: <ErrorPage /> },
//     { path: "RvAtv", element: <RvAtv />, errorElement: <ErrorPage /> },
//     { path: "contact", element: <ContactUs />, errorElement: <ErrorPage /> },
//   ]
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <ServiceState>
          {/* <RouterProvider router={router} /> */}
          <App />
        </ServiceState>
      </AppState>
    </BrowserRouter>
  </React.StrictMode>
);
