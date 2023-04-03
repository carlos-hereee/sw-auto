import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="app-body">
      <Header />
      <Landing />
      <Outlet />
    </div>
  );
}

export default App;
