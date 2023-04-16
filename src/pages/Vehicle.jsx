import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import Icons from "../component/atoms/Icons";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const [active, setActive] = useState({});
  const navigate = useNavigate();
  console.log("selected", selected);
  useEffect(() => {
    if (!selected.uid) {
      navigate("/");
    }
  }, [selected]);

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="vehicle-container">
      <div>
        <button type="button" onClick={handleClick} className="btn-back">
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
        <div className="card-container">
          <div className="vehicle-photos">
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
        </div>
        <p classname="disclaimer">{disclaimer}</p>
        <div className="btns-container">
          <button>Prev</button>
          <button>Next</button>
        </div>
        <p>
          ${selected.price ? selected.price.toLocaleString() : 0} |{" "}
          {selected.features &&
            selected.features.map(
              (f) => f.mileage && f.mileage.toLocaleString()
            )}{" "}
          miles
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>NO warranty AS IS</p>
      </div>
      {/* <button>Estimated Down</button> */}
      <div>
        <button>Add to bucket</button>
        <button>compare</button>
        <button>Confirm Availibility</button>
      </div>
    </div>
  );
};

export default Vehicle;
