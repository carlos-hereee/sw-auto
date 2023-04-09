// import Boats from "./pages/Boats";
// import Cars from "./pages/Cars";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import Cars from "./pages/Cars";
import Vehicle from "./pages/Vehicle";
import Footer from "./pages/Footer";
import Finance from "./pages/Finance";
// import RvAtv from "./pages/RvAtv";

function App() {
  return (
    <div className="app-body">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/financing" element={<Finance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
