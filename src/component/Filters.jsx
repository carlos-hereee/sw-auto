import { useContext } from "react";
import FiltersNav from "./FiltersNav";
import { AppContext } from "../utils/context/AppContext";
import AppliedFilters from "./AppliedFilters";
import SearchBar from "./molecules/SearchBar";
import FilterResult from "./atoms/FilterResult";

const Filters = () => {
  const values = { search: "" };
  const { filtered, updateAppliedFilter, appliedFilters, isFiltered, lot } =
    useContext(AppContext);

  const optionChange = (value, key) => {
    updateAppliedFilter(appliedFilters, { value, key: key.toLowerCase() });
  };

  const handleFilter = (data, isSubmit) => {
    // search on change
    if (isSubmit) {
      // handle submit
      console.log("data, isSubmit", data, isSubmit);
    } else {
      updateFilter(isFiltered ? filtered : lot, { value: data, key: "search" });
    }
  };

  return (
    <>
      <div className="container-header">
        <SearchBar values={values} handleFilter={handleFilter} />
      </div>
      <div className="container-header">
        <h3>Filters </h3>
        <FiltersNav change={optionChange} />
        {isFiltered && <AppliedFilters />}
        <FilterResult
          total={lot.length}
          count={isFiltered ? filtered.length : lot.length}
        />
      </div>
    </>
  );
};

export default Filters;
