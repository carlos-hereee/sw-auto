import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const [active, setActive] = useState(selected.photos ? selected.photos[0] : {});
  const navigate = useNavigate();
  const findIdx = () => selected.photos.findIndex((p) => p.uid === active.uid);

  useEffect(() => {
    if (!active.uid) {
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
  return (
    <div className="vehicle-container">
      <div>
        <button type="button" onClick={() => navigate(-1)} className="btn-back">
          <Icons name="left" />
          Back
        </button>
        {selected.uid && (
          <div className="vehicle-header">
            <div className="title">
              <h2>
                {selected.year} {selected.make} {selected.model}
              </h2>
              <h2 className="price">
                ${selected.price ? selected.price.toLocaleString() : 0}
              </h2>
            </div>
            <div className="title">
              <p>{selected.mileage.toLocaleString()} miles</p>{" "}
              <button type="button" className="btn-back">
                <Icons name="heart" />
                Save
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="vehicle-photos">
          {/* todo: style carousel */}
          {selected.photos &&
            selected.photos.map((p) => (
              <button
                key={p.uid}
                className={
                  active.uid === p.uid ? "active-vehicle-photo" : "vehicle-photo"
                }
                onClick={() => setActive(p)}>
                <img src={p.src} alt={p.alt} className="vehicle-img" />
              </button>
            ))}
        </div>
        <div className="hero-container">
          {active.uid ? (
            <img src={active.src} alt={active.alt} className="vehicle-hero" />
          ) : (
            selected.photos && (
              <img
                src={selected.photos[0].src}
                alt={selected.photos[0].alt}
                className="vehicle-hero"
              />
            )
          )}
          <small classname="disclaimer">{disclaimer}</small>
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
        {/* <div>{selected.uid && }</div> */}
      </div>
      <div>
        <h2>Features</h2>
        <p>NO warranty AS IS</p>
      </div>
      <div>
        <button>Add to bucket</button>
        <button>compare</button>
        <button>Confirm Availibility</button>
      </div>
    </div>
  );
};

export default Vehicle;
