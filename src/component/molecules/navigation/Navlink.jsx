import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../utils/context/UserContext";
import Buttons from "../buttons/Buttons";

/**
 *
 * data = {name=string, uid: string, notification: number}
 */
const Navlink = ({ data, handleClick }) => {
  let n = data.name && data.name.split("-").join(" ");
  const { user } = useContext(UserContext);
  if (user.uid && n === "login") {
    return (
      <li>
        <Link className="nav-link" to="/dashboard">
          <Buttons
            name="dashboard"
            notification={data.notification}
            handleClick={handleClick}
          />
        </Link>
      </li>
    );
  }
  return (
    <li>
      <Link className="nav-link" to={n === "home" ? "" : data.name}>
        <Buttons
          name={n}
          notification={data.notification}
          handleClick={handleClick}
        />
      </Link>
    </li>
  );
};

export default Navlink;
