import React from "react";
import "../../styles/progressbars.scss";

const ProgressBar = ({ unit1, unit2 }) => {
  return (
    <div className="progressbar">
      <div>
        <p>{unit1}</p>
      </div>
      <p>/{unit2}cals</p>
    </div>
  );
};

export default ProgressBar;
