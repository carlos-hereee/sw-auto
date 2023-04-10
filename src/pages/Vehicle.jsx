import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";

const Vehicle = () => {
  const { selected } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="vehicle-container">
      <div>
        <button type="button" onClick={() => navigate(-1)} className="btn-back">
          <Icons name="left" />
          Back
        </button>
        <div className="vehicle-header">
          <h2>
            {selected.year} {selected.make} {selected.model}{" "}
          </h2>
          <button type="button" className="btn-back">
            <Icons name="heart" />
            Like
          </button>
        </div>
      </div>
      <div>
        {/* <h2>Pictures</h2> */}

        <div className="btns-container">
          <button>Prev</button>
          <button>Next</button>
        </div>
        <p>
          ${selected.price.toLocaleString() || 0} |{" "}
          {selected.features.map((f) => f.mileage.toLocaleString())} miles
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>NO warranty AS IS</p>
      </div>
      {/* <button>Estimated Down</button> */}
      <div>
        <button>Add to bucket</button>
        <button>compare</button>
        <button>Confirm Availibility</button>
      </div>
    </div>
  );
};

export default Vehicle;
