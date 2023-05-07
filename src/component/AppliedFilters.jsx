import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Icons from "./atoms/Icons";

const AppliedFilters = () => {
  const { appliedFilters, updateAppliedFilter } = useContext(AppContext);
  return (
    <div>
      <h3>Filters Applied </h3>
      <div className="applied-filter">
        {appliedFilters.map((a) => (
          <div key={a.key} className="filter-list">
            <h3>{a.type?.toUpperCase()}</h3>
            <div>
              {a.list?.map((a) => (
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
        ))}
      </div>
    </div>
  );
};

export default AppliedFilters;
