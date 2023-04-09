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
      <div className="container">
        <div className="card">
          <h2>Shop with us:</h2>
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
          <button>Send us a message</button>
        </div>
        <FollowUs />
      </div>
    </div>
  );
};

export default ContactUs;
