const VehicleDetails = ({ data }) => {
  return (
    <div className="card-body">
      {/* TODO: add to saved list */}
      <h3>
        {data.year} {data.make} {data.model}
      </h3>
      <div className="vehicle-details">
        <p>
          Miles: <span>{data.mileage?.toLocaleString() || 0}</span>
        </p>
        <p>
          <strong>${data.price?.toLocaleString() || 0}</strong>
        </p>
      </div>
    </div>
  );
};

export default VehicleDetails;
