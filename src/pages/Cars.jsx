import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import SearchBar from "../component/molecules/SearchBar";

const Cars = () => {
  const { seeDetails, lot, filters, isFiltered, updateFilter, activeFilter } =
    useContext(AppContext);
  const values = { search: "" };

  const handleFilter = (data, isSubmit) => {
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(data);
    }
  };
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
        <div className="container-header">
          <h2 className="title">Filters</h2>
          <div className="filter-wrapper">
            {filters &&
              Object.keys(filters).map((f) => (
                <button key={f} className="btn-main" onClick={() => updateFilter(f)}>
                  {f}
                </button>
              ))}
          </div>
        </div>
        {/* {isFiltered && ( */}
        <div>
          <h3>Filters applied: </h3>
          {/* {filters[]} */}
          {activeFilter.map((a) => (
            <div key={a} style={{ paddingBottom: "1rem" }}>
              <h3 className="title">{a.toUpperCase()}</h3>
              {filters[a].map((f) => (
                <button
                  type="button"
                  className="btn-main"
                  onClick={() => updateFilter(lot, f)}>
                  {f}
                </button>
              ))}
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
      <div className="card-container">
        {lot.map((l) => (
          <button
            type="button"
            onClick={() => seeDetails(l)}
            key={l.objectId}
            className="card">
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
