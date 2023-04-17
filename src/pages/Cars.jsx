import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";

const Cars = () => {
  const { seeDetails, lot } = useContext(AppContext);

  return (
    <div className="vehicle-container">
      <div className="container-header">
        <div className="vehicle-header">
          <h2>Filters</h2>
          <p>Search bar</p>
          <p>Compare</p>
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
