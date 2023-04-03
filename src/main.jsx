import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import ErrorPage from "./pages/ErrorPage";
import Header from "./pages/Header";
import Cars from "./pages/Cars";
import Boats from "./pages/Boats";
import RvAtv from "./pages/RvAtv";

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
    { path: "lorem", element: <Cars />, errorElement: <ErrorPage /> },
    { path: "ipsum", element: <Boats />, errorElement: <ErrorPage /> },
    { path: "latel", element: <RvAtv />, errorElement: <ErrorPage /> },
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
      <RouterProvider router={router} />
    </AppState>
  </React.StrictMode>
);
