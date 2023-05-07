import { useContext, useEffect } from "react";
import { AppContext } from "../utils/context/AppContext";
import CardButton from "../component/molecules/card/CardButton";
import Filters from "../component/Filters";

const Cars = () => {
  const {
    seeDetails,
    lot,
    isFiltered,
    updateFilter,
    filtered,
    appliedFilters,
    resetFilter,
    filterToggle,
  } = useContext(AppContext);

  useEffect(() => {
    if (appliedFilters.length) {
      updateFilter(lot, appliedFilters);
    } else resetFilter(lot);
  }, [filterToggle]);

  return (
    <div className="vehicle-container">
      <Filters />
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
