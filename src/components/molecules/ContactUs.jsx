import { useContext } from "react";
import * as yup from "yup";
import Forms from "../organisms/Forms";
import { CalendarContext } from "../../utils/context/CalendarContext";
import FollowUs from "./FollowUs";
import { AppContext } from "../../utils/context/AppContext";
import CardHeader from "./card/CardHeader";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };
const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);
  const { socials, contact } = useContext(AppContext);
  return (
    <section className="secondary-container">
      <CardHeader data={contact} />
      <Forms data={{ values, schema, onSubmit: contactUs }} />
      <FollowUs socials={socials} />
    </section>
  );
};

export default ContactUs;
