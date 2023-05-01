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
    resetFilter,
    filterToggle,
    brands,
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
              <select
                key={f}
                className={`dropdown-input ${f}`}
                defaultValue={f}
                onChange={(e) => optionChange(e.target.value, f)}>
                <option value={f} className="dropdown-item" disabled>
                  {f
                    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                    .split(" ")
                    .map(
                      (str) => str.charAt(0).toLocaleUpperCase() + str.substring(1)
                    )
                    .join(" ")}
                </option>
                {filters[f]?.map((opt) => (
                  <option key={opt} value={opt} className="dropdown-item">
                    {opt}
                  </option>
                ))}
              </select>
            ))}
            {appliedFilters.map((af) =>
              af.hasList ? (
                <select
                  key={af.key}
                  className="dropdown-input"
                  onChange={(e) => optionChange(e.target.value, "models")}>
                  {af.list.map((list) => (
                    <>
                      <option
                        key={list.key}
                        value={list.make}
                        className="dropdown-item make"
                        disabled>
                        Model {list.make}
                      </option>
                      {brands[list.make]?.map((brand) => (
                        <option value={brand} key={brand} className="dropdown-item">
                          {brand}
                        </option>
                      ))}
                    </>
                  ))}
                </select>
              ) : (
                af.type === "make" && (
                  <select
                    key={af.key}
                    className="dropdown-input"
                    onChange={(e) => optionChange(e.target.value, "models")}>
                    <option value={af.make} className="dropdown-item" disabled>
                      Model {af.make}
                    </option>
                    {brands[af.make].map((b) => (
                      <option value={b} key={b} className="dropdown-item">
                        {b}
                      </option>
                    ))}
                  </select>
                )
              )
            )}
          </div>
        )}
        {isFiltered && (
          <div>
            <h3>Filters Applied: </h3>
            <div className="applied-filter">
              {appliedFilters.length > 0 &&
                appliedFilters.map((a) =>
                  a.hasList ? (
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
                    <VehicleHeading data={l} />
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
