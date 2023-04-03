// import { Outlet } from "react-router-dom";
// import Boats from "./pages/Boats";
// import Cars from "./pages/Cars";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
// import RvAtv from "./pages/RvAtv";

// const route = [
//   { path: "lorem", element: <Cars />, errorElement: <ErrorPage /> },
//   { path: "ipsum", element: <Boats />, errorElement: <ErrorPage /> },
//   { path: "latel", element: <RvAtv />, errorElement: <ErrorPage /> },
// ];
function App() {
  return (
    <div className="app-body">
      <Header />
      <Landing />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
