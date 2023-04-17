import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";

const Cars = () => {
  const { seeDetails, lot } = useContext(AppContext);

  console.log("lot", lot);
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
            key={l}
            className="card">
            <div className="card-header">
              <VehicleHeading data={l} />
            </div>
            <div className="card-body">
              <img
                className="vehicle-card-hero"
                src={l.photos[0]}
                alt={`${l.Make} ${l.Model}`}
              />
              {/* <div className="vehicle-details">
                <p>${l.price.toLocaleString()}</p>
                <p>
                  Miles:{" "}
                  {l.features.map(({ mileage }) => (
                    <span>{mileage.toLocaleString()}</span>
                  ))}
                </p>
              </div> */}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cars;
