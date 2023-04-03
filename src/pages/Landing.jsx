import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      {/* <div className="container"></div> */}
      <div className="card-container">
        <div className="card">
          <div className="card-header">Lorem</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button> */}
            <Link to="/lorem">Go to link</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Ipsum</div>{" "}
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button>  */}
            <Link to="/ipsum">Go to link</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Latel</div>{" "}
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button> */}
            <Link to="/latel">Go to link</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
