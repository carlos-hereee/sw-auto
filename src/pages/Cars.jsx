import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import NoCaptchaForm from "../component/molecules/forms/NoCaptchaForm";

const Cars = () => {
  const { seeDetails, lot, filters, isFiltered } = useContext(AppContext);

  console.log("filter", filters);
  const handleFilter = () => console.log("first");
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <h2 className="title">Filters</h2>
        <div className="vehicle-header">
          <NoCaptchaForm
            data={{ values: { search: "" } }}
            submit={handleFilter}
            isHorizontal
            change={handleFilter}
          />
        </div>
        {isFiltered && (
          <div>
            <p>Filters applied:</p>
          </div>
        )}
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
              alt={`${l.make} ${l.model}`}
            />
            <div className="card-body">
              <h3>
                {l.year} {l.make} {l.model}
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
