import FollowUs from "../component/molecules/FollowUs";
import Header from "./Header";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };

const ContactUs = () => {
  return (
    <div>
      <Header />
      <FollowUs />
      <p>Shop with us:</p>
      <p>
        <strong>Phone:</strong> <a href="tel:713-780-1616"> 713-780-1616</a> or{" "}
        <a href="tel:713-780-3838">713-780-3838</a>
      </p>
      <p>
        <strong>Address:</strong>{" "}
        <a
          href="https://www.google.com/maps?q=6802 Southwest Fwy, Houston, TX 77074"
          target="_blank">
          {" "}
          6802 Southwest FWY
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
