import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import SearchBar from "../component/molecules/SearchBar";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";
import FieldQuantity from "../component/molecules/forms/FieldQuantity";

const Cars = () => {
  const {
    seeDetails,
    lot,
    filters,
    isFiltered,
    updateFilter,
    activeFilter,
    appliedFilters,
  } = useContext(AppContext);
  const values = { search: "" };

  const handleFilter = (data, isSubmit) => {
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(lot, activeFilter, data);
    }
  };
  const optionChange = (e, name) => {
    updateFilter(lot, activeFilter, e.target.value, name);
  };
  // console.log("appliedFilters", appliedFilters);
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
      </div>
      <div className="container-header">
        <h3>Filters </h3>
        {filters && (
          <div className="filter-wrapper">
            {Object.keys(filters).map((f) => (
              <>
                {f === "price" ? (
                  <>
                    <FieldQuantity
                      data={{ values: { min: "", max: "" } }}
                      change={handleFilter}
                      max={filters[f][1]}
                    />
                  </>
                ) : (
                  <select
                    className="dropdown-input"
                    key={f}
                    onChange={(e) => optionChange(e, f)}>
                    <option name={f} value={f} className="dropdown-item">
                      {f}
                    </option>
                    {filters[f].map((opt) => (
                      <>
                        <option
                          key={opt}
                          name={f}
                          value={opt}
                          className="dropdown-item">
                          {opt}
                        </option>
                      </>
                    ))}
                  </select>
                )}
              </>
            ))}
          </div>
        )}
        {isFiltered &&
          appliedFilters.map((a) => (
            <div key={a} style={{ paddingBottom: "1rem" }}>
              <h3 className="title">{a.key.toUpperCase()}</h3>
              {/* {[a].map((f) => ( */}
              <button
                type="button"
                className="btn-main"
                onClick={() => updateFilter(lot, f)}>
                {a.keyword}
              </button>
              {/* ))} */}
            </div>
          ))}
      </div>
      <div className="card-container">
        {isFiltered
          ? activeFilter && activeFilter.map((a) => <div key={a.vin}>{a.make}</div>)
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
