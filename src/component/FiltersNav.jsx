import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Select from "./molecules/navigation/Select";

const FiltersNav = ({ change }) => {
  const { filters, appliedFilters, brands } = useContext(AppContext);

  console.log("appliedFilters", appliedFilters);
  return (
    <div className="filter-wrapper">
      {Object.keys(filters).map((f) => (
        <Select key={f} value={f} change={change}>
          {filters[f]?.map((opt) => (
            <option key={opt} value={opt} className="dropdown-item">
              {opt}
            </option>
          ))}
        </Select>
      ))}
      {appliedFilters.map((af) =>
        af.hasList ? (
          <Select key={af.key} value="Models" change={change}>
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
        ) : (
          af.type === "make" && (
            <Select key={af.key} value="Models" change={change}>
              {brands[af.make].map((b) => (
                <option value={b} key={b} className="dropdown-item">
                  {b}
                </option>
              ))}
            </Select>
          )
        )
      )}
    </div>
  );
};

export default FiltersNav;
