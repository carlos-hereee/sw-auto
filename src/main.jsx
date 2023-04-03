import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import Cars from "./pages/Cars";
import Boats from "./pages/Boats";
import RvAtv from "./pages/RvAtv";

const router = createBrowserRouter(
  // routesList
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/lorem" element={<Cars />} />
      <Route path="/ipsum" element={<Boats />} />
      <Route path="/latel" element={<RvAtv />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <RouterProvider router={router} />
    </AppState>
  </React.StrictMode>
);
