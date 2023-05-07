import { useContext, useEffect } from "react";
import { AppContext } from "../utils/context/AppContext";
import SearchBar from "../component/molecules/SearchBar";
import FiltersNav from "../component/FiltersNav";
import AppliedFilters from "../component/AppliedFilters";
import CardButton from "../component/molecules/card/CardButton";

const Cars = () => {
  const {
    seeDetails,
    lot,
    isFiltered,
    updateFilter,
    filtered,
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
      updateFilter(isFiltered ? filtered : lot, { value: data, key: "search" });
    }
  };
  const optionChange = (value, key) => {
    updateAppliedFilter(appliedFilters, { value, key: key.toLowerCase() });
  };
  return (
    <div className="vehicle-container">
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
      </div>
      <div className="container-header">
        <h3>Filters </h3>
        <FiltersNav change={optionChange} />
        {isFiltered && <AppliedFilters />}
      </div>
      <div className="card-container">
        {isFiltered
          ? filtered.map((a) => (
              <CardButton data={a} key={a.vin} click={seeDetails} />
            ))
          : lot.map((l) => <CardButton data={l} key={l.vin} click={seeDetails} />)}
      </div>
    </div>
  );
};

export default Cars;
