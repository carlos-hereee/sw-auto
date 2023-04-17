import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";

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
        {lot.map((car) => (
          <button
            type="button"
            onClick={() => seeDetails(car)}
            key={car.uid}
            className="card">
            <div className="card-header">
              <h2>
                {car.year} {car.make} {car.model}
              </h2>
            </div>
            <div className="card-body">
              <img
                className="vehicle-card-hero"
                src={car.photos[0].src}
                alt={car.photos[0].alt}
              />
              <div className="vehicle-details">
                <p>${car.price.toLocaleString()}</p>
                <p>
                  Miles:{" "}
                  {car.features.map(({ mileage }) => (
                    <span>{mileage.toLocaleString()}</span>
                  ))}
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
