import Logo from "../component/atoms/Logo";
import BusinessHours from "../component/molecules/BusinessHours";
import ContactUs from "../component/ContactUs";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <Logo />
          <ContactUs />
        </div>
        <BusinessHours />
        <p>&copy;{new Date().getFullYear()} SWAuto59.com All rights reserved</p>
      </footer>
    </div>
  );
};
export default Footer;
