import React from "react";
import Icons from "../../atoms/Icons";

const BackButton = () => {
  return (
    <button type="button" onClick={() => navigate(-1)} className="btn-back">
      <Icons name="left" />
      Back
    </button>
  );
};

export default BackButton;
