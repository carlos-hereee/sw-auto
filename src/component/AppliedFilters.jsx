import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Icons from "./atoms/Icons";

const AppliedFilters = () => {
  const { appliedFilters, updateAppliedFilter, resetFilter } =
    useContext(AppContext);
  return (
    <div className="applied-filter-container">
      <div className="applied-filter">
        <h3>Filters Applied </h3>
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
      <button
        type="reset"
        className="btn-main btn-reset"
        onCLick={() => resetFilter(data)}>
        Clear <Icons name="refresh" />
      </button>
    </div>
  );
};

export default AppliedFilters;
