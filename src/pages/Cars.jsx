import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import SearchBar from "../component/molecules/SearchBar";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";
import FieldQuantity from "../component/molecules/forms/FieldQuantity";
import Hero from "../component/atoms/Hero";

const Cars = () => {
  const {
    seeDetails,
    lot,
    filters,
    isFiltered,
    updateFilter,
    activeFilter,
    appliedFilters,
    updateAppliedFilter,
  } = useContext(AppContext);
  const values = { search: "" };

  const handleFilter = (data, isSubmit) => {
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(lot, data);
    }
  };
  const optionChange = (value, key) => {
    if (isFiltered) {
      console.log("activeFilter", activeFilter);
      updateFilter(activeFilter, value, key);
    } else updateFilter(lot, value, key);
    updateAppliedFilter(appliedFilters, value, key);
  };
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
                  <FieldQuantity
                    key={f}
                    data={{ values: { min: "", max: "" } }}
                    change={handleFilter}
                    max={filters[f][1]}
                  />
                ) : (
                  <select
                    className="dropdown-input"
                    key={f}
                    onChange={(e) => optionChange(e.target.value, f)}
                    onSubmit={(e) => optionChange(e.target.value, f)}>
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
        {isFiltered && (
          <div>
            <h3>Filters Applied: </h3>
            <div className="applied-filter">
              {appliedFilters.length > 0 &&
                appliedFilters.map((a) => (
                  <div key={a.type}>
                    <h3>{a.type?.toUpperCase()}</h3>
                    <button
                      type="button"
                      className="btn-main"
                      onClick={() =>
                        updateAppliedFilter(appliedFilters, a[a.type], a.type)
                      }>
                      {a[a.type]}
                      <Icons name="x" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <div className="card-container">
        {isFiltered
          ? activeFilter.map(
              (a) =>
                a.photos && (
                  <button
                    type="button"
                    className="card"
                    onClick={() => seeDetails(a)}
                    key={a.vin}>
                    <img
                      className="vehicle-card-hero"
                      src={a.photos[0]}
                      alt={`${a.make} ${a.model} ${a.year}`}
                    />
                    <VehicleDetails data={a} />
                  </button>
                )
            )
          : lot.map((l) => (
              <button
                type="button"
                onClick={() => seeDetails(l)}
                key={l.vin}
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
