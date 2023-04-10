import { useContext } from "react";
import Header from "./Header";
import { AppContext } from "../utils/context/AppContext";

const Cars = () => {
  const { seeDetails, inLot } = useContext(AppContext);

  return (
    <div className="vehicle-container">
      <h2>Cars</h2>
      <div className="container-header">
        <div className="vehicle-filters">
          <h2>Filters</h2>
          <p>Search bar</p>
          <p>Compare</p>
        </div>
        <div>
          <p>Filters applied:</p>
        </div>
      </div>
      <div className="card-container">
        {inLot.map((car) => (
          <div key={car.uid} className="card">
            <div className="card-header">
              {car.year} {car.make} {car.model}
            </div>
            <div className="card-body">
              <h2>Picture</h2>
              <p>
                Miles:{" "}
                {car.features.map(({ mileage }) => (
                  <span>{mileage.toLocaleString()}</span>
                ))}
              </p>
              <p>${car.price.toLocaleString()}</p>
            </div>
            <div className="card-footer">
              <button type="button" onClick={() => seeDetails(car)}>
                See Details
              </button>
              <button>Confirm Availibility</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
