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
            <Select key={af.key} value="Model" change={change}>
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
            </Select>
          )
      )}
    </div>
  );
};

export default FiltersNav;
