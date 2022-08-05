import React from "react";
import reactIcon from "./img/reactIcon.svg";
import "./LoadingIcon.css";

const LoadingIcon = () => {
  return (
    <div className="LoadingIcon">
      <p>Loading...</p>
      <img src={reactIcon} className="spinningLogo" alt="react logo" />
    </div>
  );
};

export default LoadingIcon;
