import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="industry brand" className="logo" />
      {/* <h2 className="header-title">{app.title}</h2> */}
    </div>
  );
};

export default Logo;
