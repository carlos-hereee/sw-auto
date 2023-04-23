import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import SearchBar from "../component/molecules/SearchBar";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";

const Cars = () => {
  const { seeDetails, lot, filters, isFiltered, updateFilter, activeFilter } =
    useContext(AppContext);
  const values = { search: "" };

  const handleFilter = (data, isSubmit) => {
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(lot, activeFilter, data);
    }
  };
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
      </div>
      <div className="container-header">
        <h3>Filters </h3>
        {/* {filters[]} */}
        <div className="filter-wrapper">
          {filters &&
            Object.keys(filters).map((f) => (
              <button key={f} className="btn-main" onClick={() => updateFilter(f)}>
                {f}
              </button>
            ))}
        </div>
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
      <div className="card-container">
        {isFiltered
          ? filters && filters.map((f) => <div></div>)
          : lot.map((l) => (
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
                <VehicleDetails data={l} />
              </button>
            ))}
      </div>
    </div>
  );
};

export default Cars;
