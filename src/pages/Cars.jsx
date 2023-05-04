import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import CardHeader from "../component/molecules/card/CardHeader";
import Icons from "../component/atoms/Icons";
import SearchBar from "../component/molecules/SearchBar";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";
import FieldQuantity from "../component/molecules/forms/FieldQuantity";
import Hero from "../component/atoms/Hero";
import FiltersNav from "../component/FiltersNav";

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
    resetFilter,
    filterToggle,
  } = useContext(AppContext);
  const values = { search: "" };

  useEffect(() => {
    if (appliedFilters.length) {
      updateFilter(lot, appliedFilters);
    } else resetFilter(lot);
  }, [filterToggle]);

  const handleFilter = (data, isSubmit) => {
    // search on change
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(isFiltered ? activeFilter : lot, { value: data, key: "search" });
    }
  };
  const optionChange = (value, key) => {
    updateAppliedFilter(appliedFilters, { value, key });
  };
  console.log("appliedFilters", appliedFilters);
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
      </div>
      <div className="container-header">
        <h3>Filters </h3>
        {filters && <FiltersNav change={optionChange} />}
        {isFiltered && (
          <div>
            <h3>Filters Applied </h3>
            <div className="applied-filter">
              {appliedFilters.map((a) =>
                a.list.length ? (
                  <div key={a.key} className="filter-list">
                    <h3>{a.type?.toUpperCase()}</h3>
                    <div>
                      {a.list.map((a) => (
                        <button
                          key={a.key}
                          type="button"
                          className="btn-main"
                          onClick={() =>
                            updateAppliedFilter(appliedFilters, {
                              value: a[a.type],
                              key: a.type,
                            })
                          }>
                          {a[a.type]}
                          <Icons name="x" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={a.key} className="filter-list">
                    <h3>{a.type?.toUpperCase()}</h3>
                    <button
                      type="button"
                      className="btn-main"
                      onClick={() =>
                        updateAppliedFilter(appliedFilters, {
                          value: a[a.type],
                          key: a.type,
                        })
                      }>
                      {a[a.type]}
                      <Icons name="x" />
                    </button>
                  </div>
                )
              )}
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
                    <VehicleHeading data={a} />
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
                <VehicleHeading data={l} />
              </button>
            ))}
      </div>
    </div>
  );
};

export default Cars;
