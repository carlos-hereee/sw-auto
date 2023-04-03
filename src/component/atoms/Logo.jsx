import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img src={logo} alt="industry brand" className="logo" />
      </Link>
      {/* <h2 className="header-title">{app.title}</h2> */}
    </div>
  );
};

export default Logo;