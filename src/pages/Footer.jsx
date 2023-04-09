import { useContext } from "react";
import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import FollowUs from "../component/molecules/FollowUs";
import ContactUs from "../component/ContactUs";
import { AppContext } from "../utils/context/AppContext";

const Footer = () => {
  const { disclaimer } = useContext(AppContext);
  return (
    <div>
      <footer>
        <div>
          <Logo />
          <ContactUs />
        </div>
        <BusinessHours />
        <p>{disclaimer}</p>
      </footer>
    </div>
  );
};
export default Footer;
