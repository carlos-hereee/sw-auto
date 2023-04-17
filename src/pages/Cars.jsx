import { useContext, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import NoCaptchaForm from "../component/molecules/forms/NoCaptchaForm";

const Cars = () => {
  const { seeDetails, lot } = useContext(AppContext);
  const [filter, setFilter] = useState("");
  const values = { search: "" };
  const handleSubmit = () => console.log("first");
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <div className="vehicle-header">
          <h2 className="title">Filters</h2>

          {/* <input value="" placeholder="Search..." /> */}
          <NoCaptchaForm data={{ values }} submit={handleSubmit} isHorizontal />
          <Icons name="search" />
          {/* <p>Compare</p> */}
        </div>
        <div>
          <p>Filters applied:</p>
        </div>
      </div>
      <div className="card-container">
        {lot.map((l) => (
          <button
            type="button"
            onClick={() => seeDetails(l)}
            key={l.objectId}
            className="card-item">
            <img
              className="vehicle-card-hero"
              src={l.photos[0]}
              alt={`${l.Make} ${l.Model}`}
            />
            <div className="card-body">
              <h3>
                {l.Year} {l.Make} {l.Model}
              </h3>
              <div className="vehicle-details">
                <p>
                  Miles: <span>{l.mileage.toLocaleString()}</span>
                </p>
                <p>
                  <strong>${l.price.toLocaleString()}</strong>
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cars;
