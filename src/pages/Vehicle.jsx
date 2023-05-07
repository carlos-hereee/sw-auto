import { useContext, useEffect } from "react";
import { AppContext } from "../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import VehicleHeading from "../component/molecules/vehicle/VehicleHeading";
import VehicleDetails from "../component/molecules/vehicle/VehicleDetails";
import BackButton from "../component/molecules/buttons/BackButton";
import Carousel from "../component/Carousel";

const Vehicle = () => {
  const { selected, disclaimer } = useContext(AppContext);
  const navigate = useNavigate();

  // console.log("selected", selected);
  useEffect(() => {
    if (!selected.vin) {
      navigate(-1);
    }
  }, [selected]);

  return (
    <div className="vehicle-container">
      <div>
        <BackButton />
        <div className="vehicle-header">
          <VehicleHeading data={selected} />
        </div>
      </div>
      <Carousel data={selected} disclaimer={disclaimer} />

      <div>
        {selected.vin && <VehicleDetails data={selected} showDetails={true} />}
      </div>
    </div>
  );
};

export default Vehicle;
