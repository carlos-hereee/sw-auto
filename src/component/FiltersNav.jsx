import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Select from "./molecules/navigation/Select";

const FiltersNav = ({ change }) => {
  const { filters, appliedFilters, brands } = useContext(AppContext);

  return (
    <div className="filter-wrapper">
      {filters &&
        Object.keys(filters)?.map((f) => (
          <Select key={f} value={f} change={change}>
            {filters[f]?.map((opt) => (
              <option key={opt} value={opt} className="dropdown-item">
                {opt}
              </option>
            ))}
          </Select>
        ))}
      {appliedFilters?.map(
        (af) =>
          af.type === "make" && (
            <Select key={af.vin} value="Model" change={change}>
              {af.list.map((l) => (
                <>
                  <option
                    key={l.vin}
                    value={l.make}
                    className="dropdown-item make"
                    disabled>
                    Model {l.make}
                  </option>
                  {brands[l.make]?.map((brand) => (
                    <option value={brand} key={brand} className="dropdown-item">
                      {brand}
                    </option>
                  ))}
                </>
              ))}
            </Select>
          )
      )}
    </div>
  );
};

export default FiltersNav;
