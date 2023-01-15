import React from "react";
import SpinnerImage from "./Assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={SpinnerImage}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
