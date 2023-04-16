import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const [active, setActive] = useState(selected.photos ? selected.photos[0] : {});
  const navigate = useNavigate();
  useEffect(() => {
    if (!selected.uid) {
      navigate(-1);
    }
  }, [selected]);

  const viewControl = (cmd) => {
    // find index
    if (active.uid) {
      const idx = selected.photos.findIndex((p) => p.uid === active.uid);
      if (idx === -1) {
        setActive(selected.photos[0]);
      }
      const last = selected.photos.length - 1;
      if (cmd === "next" && idx !== last) {
        setActive(selected.photos[idx + 1]);
      }
      if (cmd === "prev" && idx !== 0) {
        setActive(selected.photos[idx - 1]);
      }
    }
  };
  return (
    <div className="vehicle-container">
      <div>
        <button type="button" onClick={() => navigate(-1)} className="btn-back">
          <Icons name="left" />
          Back
        </button>
        <div className="vehicle-header">
          <h2>
            {selected.year} {selected.make} {selected.model}{" "}
          </h2>
          <button type="button" className="btn-back">
            <Icons name="heart" />
            Like
          </button>
        </div>
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
        </div>
        <div className="btns-container">
          <button type="button" className="btn" onClick={() => viewControl("prev")}>
            Prev
          </button>
          <button type="button" className="btn" onClick={() => viewControl("next")}>
            Next
          </button>
        </div>
        <div>
          <p>
            ${selected.price ? selected.price.toLocaleString() : 0} |{" "}
            {selected.features &&
              selected.features.map(
                (f) => f.mileage && f.mileage.toLocaleString()
              )}{" "}
            miles
          </p>
        </div>
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
