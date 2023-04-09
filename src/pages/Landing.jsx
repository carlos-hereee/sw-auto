import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <h2>Se habla espanol</h2>
      {/* <input /> */}
      {/* <p>Search bar</p>
       */}

      <div className="search-bar">
        <input type="text" />
        <button>Search</button>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">Cars</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button> */}
            <Link to="/cars">See lastest</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Boats</div>{" "}
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button>  */}
            <Link to="/boats">See lastest</Link>{" "}
          </div>
        </div>
        <div className="card">
          <div className="card-header">RV/ATV</div>{" "}
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="card-footer">
            {/* <button>Go to link</button> */}
            <Link to="/rvatv">See lastest</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
