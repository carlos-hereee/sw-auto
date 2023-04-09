// import Boats from "./pages/Boats";
// import Cars from "./pages/Cars";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import ContactUs from "./component/ContactUs";
import Cars from "./pages/Cars";
import Vehicle from "./pages/Vehicle";
import Footer from "./pages/Footer";
// import RvAtv from "./pages/RvAtv";

function App() {
  return (
    <div className="app-body">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
