import Icons from "../../atoms/Icons";

const VehicleDetails = ({ data }) => {
  return (
    <div className="title">
      <p>{data.mileage.toLocaleString()} miles</p>
      {/* todo add to saved list */}
      <button type="button" className="btn-main">
        <Icons name="heart" />
        Save
      </button>
    </div>
  );
};

export default VehicleDetails;
