import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";
import BackButton from "../component/molecules/buttons/BackButton";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const [active, setActive] = useState(selected?.photos ? selected?.photos[0] : {});
  const navigate = useNavigate();
  const findIdx = () => selected.photos.findIndex((p) => p === active);

  // console.log("selected", selected);
  useEffect(() => {
    if (!active.vin) {
      if (selected.photos) {
        setActive(selected.photos[0]);
      } else navigate(-1);
    }
  }, [active]);
  const controls = (cmd) => {
    // find index
    const idx = findIdx();
    if (idx === -1 || cmd === "first") {
      setActive(selected.photos[0]);
    }
    const last = selected.photos.length - 1;
    if (cmd === "next" && idx !== last) {
      setActive(selected.photos[idx + 1]);
    }
    if (cmd === "prev" && idx !== 0) {
      setActive(selected.photos[idx - 1]);
    }
    if (cmd === "last") {
      setActive(selected.photos[last]);
    }
  };
  console.log("active", active);
  return (
    <div className="vehicle-container">
      <div>
        <BackButton />
        <div className="vehicle-header">
          <VehicleHeading data={selected} />
        </div>
      </div>
      <div>
        <div className="vehicle-photos">
          {/* todo: style carousel */}
          {selected.photos?.map((p) => (
            <button
              key={p.src}
              className={
                active.uid === p.uid ? "active-vehicle-photo" : "vehicle-photo"
              }
              onClick={() => setActive(p)}>
              <img
                src={p.src}
                alt={`${selected.year} ${selected.make} ${selected.model}`}
                className="vehicle-img"
              />
            </button>
          ))}
        </div>
        <div className="hero-container">
          {active && (
            <img
              src={active.src}
              alt={`${selected.year} ${selected.make} ${selected.model}`}
              className="vehicle-hero"
            />
          )}
          <small className="disclaimer">{disclaimer}</small>
          <div className="display-gap">
            <button
              type="button"
              className="btn-main"
              onClick={() => controls("first")}>
              <Icons name="leftChevron" />
            </button>
            <button
              type="button"
              className="btn-main"
              onClick={() => controls("prev")}>
              <Icons name="left" />
              Prev
            </button>
            <button
              type="button"
              className="btn-main"
              onClick={() => controls("next")}>
              Next
              <Icons name="right" />
            </button>
            <button
              type="button"
              className="btn-main"
              onClick={() => controls("last")}>
              <Icons name="rightChevron" />
            </button>
          </div>
        </div>
      </div>
      <div>
        {selected.vin && <VehicleDetails data={selected} showDetails={true} />}
      </div>
    </div>
  );
};

export default Vehicle;
