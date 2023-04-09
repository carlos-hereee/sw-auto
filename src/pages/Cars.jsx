import Header from "./Header";

const Cars = () => {
  let inLot = [
    {
      uid: "acura-2013-9875",
      make: "Acura",
      model: "TL Advance",
      year: 2013,
      price: 9875,
      photos: [],
      features: [
        {
          bodyStyle: "sedan",
          engine: "3.5L",
          cylinders: "6-Cylinder",
          driveTrain: "FWD",
          transmission: "Automatic 6-Speed",
          color: "black",
          mileage: 152000,
          doors: "4D",
          stockNumber: 0,
        },
      ],
      comments:
        "2013 Acura TL Advance FWD, 6-Cylinder Auto, 3.5L, Leather Seats, 152k Miles, Bluetooth, Backup Camera, Push-Start, Heated/Cooled Seats, Sunroof, Memory Seats,  Traction Control, Aux Audio Connection, Rear Window Defroster. P/w P/dl P/m. Special Finance Available Bad Credit, No Problem! 713-780-1616. Se Habla Espanol, No Credit, No Social Security Number Ok! Nosotros Financiamos!  www.swauto59.com      ",
      optionsInstalled: "",
    },
    {
      uid: "bmw-2013-15750",
      make: "BMW",
      model: "750 Li",
      year: 2013,
      price: 15750,
      photos: [],
      features: [
        {
          bodyStyle: "sedan",
          engine: "4.4L",
          cylinders: "8 Cylinder Turbo",
          driveTrain: "Rear Wheel Drive",
          transmission: "Automatic 8-Speed",
          color: "white",
          mileage: 61000,
          doors: "4D",
          stockNumber: 0,
        },
      ],
      comments:
        "2013 BMW 750Li RWD, 8-Cylinder Turbo Auto, 4.4L, 61k Miles, Sunroof, Leather Seats, Memory Seats, Navigation, Heated Seats, Heads Up Display, Rear Window Defroster, P/Steering Wheel Adjuster, P/w PDL P/m P/s A/C Am Fm CD Tilt Cruise. Special Finance Available. No Credit Bad Credit, No Driver License, No Social Security, No Problem! We finance 713-780-1616. Se Habla Espanol! $2,250 Down + Tax TL. www.swauto59.com ",
      optionsInstalled: "",
    },
  ];
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Cars</h2>
        <div>
          <h2>Filters</h2>
          <p>Seach bar</p>
          <p>Compare</p>
        </div>
        <div className="card-container">
          {inLot.map((cars) => (
            <div key={cars.uid} className="card">
              <div className="card-header">
                {cars.year} {cars.make} {cars.model}
              </div>
              <div className="card-body">
                <h2>Picture</h2>
                <p>
                  Miles:{" "}
                  {cars.features.map(({ mileage }) => (
                    <span>{mileage.toLocaleString()}</span>
                  ))}
                </p>
                <p>${cars.price.toLocaleString()}</p>
              </div>
              <div className="card-footer">
                <button>Confirm Availibility</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
