import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import NoCaptchaForm from "../component/molecules/forms/NoCaptchaForm";

const Cars = () => {
  const { seeDetails, lot } = useContext(AppContext);
  const [filter, setFilter] = useState();
  const values = { search: "" };

  useEffect(() => {
    if (lot.length) {
      let filters = { year: [], make: [], model: [], category: [], mileage: [] };
      lot.forEach((l) => {
        if (!filters.year.includes(l.year)) {
          filters.year.push(l.year);
        }
        if (!filters.make.includes(l.make)) {
          filters.make.push(l.make);
        }
        if (!filters.model.includes(l.model)) {
          filters.model.push(l.model);
        }
        if (!filters.mileage.includes(l.mileage)) {
          filters.mileage.push(l.mileage);
        }
        if (!filters.category.includes(l.category)) {
          filters.category.push(l.category);
        }
      });
      setFilter(filters);
    }
  }, [lot]);
  console.log("filter", filter);
  const handleFilter = () => console.log("first");
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <h2 className="title">Filters</h2>
        <div className="vehicle-header">
          <NoCaptchaForm
            data={{ values }}
            submit={handleFilter}
            isHorizontal
            change={handleFilter}
          />
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
