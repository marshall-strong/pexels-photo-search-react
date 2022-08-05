import React from "react";
import reactIcon from "./img/reactIcon.svg";
import pexelsIcon from "./img/pexelsCircle.svg"
import "./SpinningIcon.css";

const SpinningIcon = () => {
  return (
    <div className="SpinningIcon">
      <img src={reactIcon} className="spinEffect reactIcon" alt="React logo" />
      <div class="pulsar"></div>
      <img src={pexelsIcon} className="pulseEffect pexelsIcon" alt="Pexels logo" />
    </div>
  );
};

export default SpinningIcon;
