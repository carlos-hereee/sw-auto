const VehicleDetails = ({ data }) => {
  return (
    <div className="card-body">
      {/* TODO: add to saved list */}
      <strong>
        {data.year} {data.make} {data.model} Features:
      </strong>
      <span>VIN: {data.vin.toUpperCase()}</span>
      <div className="vehicle-details">
        {data.features?.map((feature) => (
          <div className="vehicle-details-wrapper" key={feature.vin}>
            {data.mileage && (
              <p>
                Miles: <span>{data.mileage?.toLocaleString() || 0}</span>
              </p>
            )}
            {Object.keys(feature).map((f) => (
              <p key={feature[f]}>
                {f}: {feature[f]}
              </p>
            ))}
            {/* {feature.category && <p>Body Style: {feature.category}</p>}
            {feature.engine && <p>Engine: {feature.engine}</p>}
            {feature.cylinders && <p>Cylinders: {feature.cylinders}</p>}
            {feature.fuel && <p>Fuel: {feature.fuel}</p>}
            {feature.driveTrain && <p>Drive Train: {feature.driveTrain}</p>}
            {feature.transmission && <p>Transmission: {feature.transmission}</p>}
            {feature.colorOutside && <p>Exterior Color: {feature.colorOutside}</p>}
            {feature.colorInside && <p>Interior Color: {feature.colorInside}</p>}
            {feature.doors && <p>Doors: {feature.doors}</p>} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDetails;
