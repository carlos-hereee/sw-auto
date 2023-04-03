import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Btn from "../components/atoms/buttons/button";
import { AppContext } from "../utils/context/AppContext";

const Header = () => {
  const { menu } = useContext(AppContext);
  return (
    <header>
      <img src={logo} alt="sw-auto" />
      {menu.map((m) => (
        <Btn data={m} />
      ))}
    </header>
  );
};
export default Header;
