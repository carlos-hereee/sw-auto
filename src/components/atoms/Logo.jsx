import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";

const Logo = () => {
  const { app } = useContext(AppContext);
  // console.log("app", app);
  return (
    <div className="logo-wrapper">
      <img src={app.link} alt={app.alt} className="logo" />
      <h2 className="header-title">{app.title}</h2>
    </div>
  );
};

export default Logo;
