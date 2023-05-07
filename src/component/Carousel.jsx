import { useState } from "react";
import Hero from "./atoms/Hero";
import Icons from "./atoms/Icons";

const Carousel = ({ data, disclaimer }) => {
  const [active, setActive] = useState(data?.photos ? data?.photos[0] : {});
  const findIdx = () => data.photos.findIndex((p) => p === active);

  const controls = (cmd) => {
    // find index
    // console.log("e", e.target.title);
    const idx = findIdx();
    if (idx === -1 || cmd === "first") {
      setActive(data.photos[0]);
    }
    const last = data.photos.length - 1;
    if (cmd === "next" && idx !== last) {
      setActive(data.photos[idx + 1]);
    }
    if (cmd === "prev" && idx !== 0) {
      setActive(data.photos[idx - 1]);
    }
    if (cmd === "last") {
      setActive(data.photos[last]);
    }
  };
  return (
    <div>
      <div className="vehicle-photos">
        {/* todo: style carousel */}
        {data.photos?.map((p) => (
          <button
            key={p.uid}
            className={
              active.uid === p.uid ? "active-vehicle-photo" : "vehicle-photo"
            }
            onClick={() => setActive(p)}>
            <Hero data={{ link: p.src, name: p.alt }} />
          </button>
        ))}
      </div>
      <div className="hero-container">
        {active && <Hero data={{ link: active.src, name: active.alt }} />}
        <small className="disclaimer">{disclaimer}</small>
        <div className="display-gap">
          {["First", "Prev", "Next", "Last"].map((cmd) => (
            <button key={cmd} className="btn-main" onClick={() => controls(cmd)}>
              {cmd}
              <Icons name={cmd.toLowerCase()} />
            </button>
          ))}
          {/* <button
            type="button"
            className="btn-main"
            title="First"
            onClick={() => controls("first")}>
            <Icons name="leftChevron" />
          </button>
          <button
            type="button"
            title="Previous"
            className="btn-main"
            onClick={() => controls("prev")}>
            <Icons name="left" />
            Prev
          </button>
          <button
            type="button"
            title="Next"
            className="btn-main"
            onClick={() => controls("next")}>
            Next
            <Icons name="right" />
          </button>
          <button
            type="button"
            title="Last"
            className="btn-main"
            onClick={() => controls("last")}>
            <Icons name="rightChevron" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
