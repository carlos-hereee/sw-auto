const VehicleDetails = ({ data }) => {
  return (
    <div className="card-body">
      {/* TODO: add to saved list */}
      <strong>
        {data.year} {data.make} {data.model} Features:
      </strong>
      <span>VIN: {data.vin.toUpperCase()}</span>
      <div className="vehicle-details">
        {data.features?.map((f) => (
          <div className="vehicle-details-wrapper" key={f.vin}>
            {data.mileage && (
              <p>
                Miles: <span>{data.mileage?.toLocaleString() || 0}</span>
              </p>
            )}
            {f.category && <p>Body Style: {f.category}</p>}
            {f.engine && <p>Engine: {f.engine}</p>}
            {f.cylinders && <p>Cylinders: {f.cylinders}</p>}
            {f.fuel && <p>Fuel: {f.fuel}</p>}
            {f.driveTrain && <p>Drive Train: {f.driveTrain}</p>}
            {f.transmission && <p>Transmission: {f.transmission}</p>}
            {f.colorOutside && <p>Exterior Color: {f.colorOutside}</p>}
            {f.colorInside && <p>Interior Color: {f.colorInside}</p>}
            {f.doors && <p>Doors: {f.doors}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDetails;
