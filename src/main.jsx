import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
// import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/lorem",
        element: <Landing />,
      },
      {
        path: "/ipsum",
        element: <Landing />,
      },
      {
        path: "/latel",
        element: <Landing />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <RouterProvider router={router} />
    </AppState>
  </React.StrictMode>
);
