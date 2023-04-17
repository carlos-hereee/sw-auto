const VehicleHeading = ({ data }) => {
  return (
    <div className="title">
      <h2>
        {data.Year} {data.Make} {data.Model}
      </h2>
      <h2 className="price">${data.price ? data.price.toLocaleString() : 0}</h2>
    </div>
  );
};

export default VehicleHeading;
