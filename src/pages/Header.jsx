import logo from "../assets/logo.jpg";
import Btn from "../components/buttons/btn";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="sw-auto" />
      <Btn />
    </div>
  );
};
export default Header;
