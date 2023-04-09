import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import ErrorPage from "./pages/ErrorPage";
import Cars from "./pages/Cars";
import Car from "./component/Car";
import Boats from "./pages/Boats";
import RvAtv from "./pages/RvAtv";
import ContactUs from "./pages/ContactUs";
import { ServiceState } from "./utils/context/ServiceContext";

const router = createBrowserRouter(
  // routesList
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        // { path: "lorem", element: <Cars /> },
        // { path: "ipsum", element: <Boats /> },
        // { path: "latel", element: <RvAtv /> },
      ],
    },
    { path: "cars", element: <Cars />, errorElement: <ErrorPage /> },
    { path: "boats", element: <Boats />, errorElement: <ErrorPage /> },
    { path: "RvAtv", element: <RvAtv />, errorElement: <ErrorPage /> },
    { path: "contact", element: <ContactUs />, errorElement: <ErrorPage /> },
  ]
  // createRoutesFromElements(
  //   <Route path="/" element={<App />}>
  //     <Route path="/lorem" element={<Cars />} />
  //     <Route path="/ipsum" element={<Boats />} />
  //     <Route path="/latel" element={<RvAtv />} />
  //   </Route>
  // )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <ServiceState>
        <RouterProvider router={router} />
      </ServiceState>
    </AppState>
  </React.StrictMode>
);
