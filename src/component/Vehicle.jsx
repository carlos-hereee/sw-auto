import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";

const Vehicle = () => {
  const { selected } = useContext(AppContext);

  return (
    <div>
      <div>
        <button>Back</button>
        <h2>
          {selected.year} {selected.make} {selected.model}{" "}
        </h2>
        <p>
          {selected.price} | {selected.miles}
        </p>
        <button>Like</button>
      </div>
      <div>
        <h2>Pictures</h2>
        <button>Prev</button>
        <button>Next</button>
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
