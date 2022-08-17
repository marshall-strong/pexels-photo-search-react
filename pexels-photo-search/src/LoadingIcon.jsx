import React from "react";
import reactIcon from "./img/reactIcon.svg";
import "./LoadingIcon.css";

const LoadingIcon = () => {
  return (
    <div className="loading-icon-component">
      <p>Loading...</p>
      <img src={reactIcon} className="spinning-logo" alt="react logo" />
    </div>
  );
};

export default LoadingIcon;
