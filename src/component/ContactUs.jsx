import FollowUs from "./molecules/FollowUs";
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
      <h2>Shop with us:</h2>
      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:713-780-1616" className="link">
          {" "}
          713-780-1616
        </a>{" "}
        or{" "}
        <a href="tel:713-780-3838" className="link">
          713-780-3838
        </a>
      </p>
      <p>
        <strong>Address:</strong>{" "}
        <a
          href="https://www.google.com/maps?q=6802+Southwest+Fwy,+Houston,+TX+77074"
          target="_blank"
          className="link">
          {" "}
          6802 Southwest Fwy
        </a>
      </p>
      <button>Send us a message</button>
      <FollowUs />
    </div>
  );
};

export default ContactUs;
