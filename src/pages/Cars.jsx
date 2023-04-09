import { useContext } from "react";
import Header from "./Header";
import { AppContext } from "../utils/context/AppContext";

const Cars = () => {
  const { seeDetails, selected, inLot } = useContext(AppContext);
  console.log("selected", selected);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Cars</h2>
        <div>
          <h2>Filters</h2>
          <p>Seach bar</p>
          <p>Compare</p>
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
    </div>
  );
};

export default Cars;
