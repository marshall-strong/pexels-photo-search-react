import React from "react";
import reactIcon from "./img/reactIcon.svg";
import "./SpinningIcon.css";

const SpinningIcon = () => {
  return (
    <div className="SpinningIcon">
      <img src={reactIcon} className="spinEffect" alt="a spinning animation" />
    </div>
  );
};

export default SpinningIcon;
