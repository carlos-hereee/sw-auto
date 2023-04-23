const VehicleDetails = ({ data }) => {
  return (
    <div className="card-body">
      {/* todo add to saved list */}
      <h3 className="title">
        {data.year} {data.make} {data.model}
      </h3>
      <div className="vehicle-details">
        <p>
          Miles: <span>{data.mileage.toLocaleString()}</span>
        </p>
        <p>
          <strong>${data.price.toLocaleString()}</strong>
        </p>
      </div>
    </div>
  );
};

export default VehicleDetails;
