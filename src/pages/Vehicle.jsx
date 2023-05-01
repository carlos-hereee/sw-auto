import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const [active, setActive] = useState(selected.photos ? selected.photos[0] : {});
  const navigate = useNavigate();
  const findIdx = () => selected.photos.findIndex((p) => p === active);

  useEffect(() => {
    if (!active) {
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
  console.log("selected", selected);
  return (
    <div className="vehicle-container">
      <div>
        <button type="button" onClick={() => navigate(-1)} className="btn-back">
          <Icons name="left" />
          Back
        </button>
        <div className="vehicle-header">
          <VehicleHeading data={selected} />
        </div>
      </div>
      <div>
        <div className="vehicle-photos">
          {/* todo: style carousel */}
          {selected.photos?.map((p) => (
            <button
              key={p}
              className={
                active.vin === selected.vin
                  ? "active-vehicle-photo"
                  : "vehicle-photo"
              }
              onClick={() => setActive(p)}>
              <img
                src={p}
                alt={`${selected.year} ${selected.make} ${selected.model}`}
                className="vehicle-img"
              />
            </button>
          ))}
        </div>
        <div className="hero-container">
          {active && (
            <img
              src={active}
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
        {/* <div>{selected.vin && }</div> */}
      </div>
      <div>
        <VehicleDetails data={selected} showDetails={true} />
      </div>
      {/* {selected.vin && (
        <div className="section">
          <h2>Features</h2>
          {selected.features.map((f) => (
            <div key={f.vin} className="section-card">
              <p>Transmission: {f.transmission}</p>
              <p>Cylinders: {f.cylinders}</p>
              <p>Body Style: {f.bodyStyle}</p>
              <p>Drive Train: {f.driveTrain}</p>
              <p>Color: {f.color}</p>
              <p>Mileage: {f.mileage.toLocaleString()}</p>
              <p>Engine: {f.engine}</p>
              <p>Doors: {f.doors}</p>
              <p>Stock Number: {f.stockNumber}</p>
            </div>
          ))}
        </div>
      )} */}
      {/* <p>NO warranty AS IS</p> */}
      {/* 
      TODO: add to saved
            create compare feature
            confirm avaliblitly
      <div>
        <button>Add to bucket</button>
        <button>compare</button>
        <button>Confirm Availibility</button>
      </div> */}
    </div>
  );
};

export default Vehicle;
