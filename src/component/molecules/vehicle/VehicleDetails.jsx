const VehicleDetails = ({ data }) => {
  return (
    <div className="card-body">
      {/* TODO: add to saved list */}
      <h3>
        {data.year} {data.make} {data.model}
      </h3>
      <div className="vehicle-details">
        {data.features.map((f) => (
          <div className="" key={f.vin}>
            <p>
              Miles: <span>{f.mileage?.toLocaleString() || 0}</span>
            </p>
            <p>Body Style: {f.category}</p>
            <p>Engine: {f.engine}</p>
            <p>Cylinders: {f.cylinders}</p>
            <p>Fuel: {f.fuel}</p>
            <p>Drive Train: {f.driveTrain}</p>
            <p>Transmission: {f.transmission}</p>
            <p>Exterior Color: {f.colorOutside}</p>
            <p>Interior Color: {f.colorInside}</p>
            <p>Doors: {f.doors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDetails;
