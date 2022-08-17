import React from "react";
import SpinningIcon from "./SpinningIcon";
import "./SplashGrid.css";

const SplashGrid = ({ _attributionUrl, _returnToHomepage }) => {
  return (
    <div className="splash-grid-component">
      <div className="matrixLayout">
        <ul className="row topRow">
          <li className="col leftCol">
            <span>&#x2196;</span>
          </li>
          <li className="col centerCol">
            <span>&#x2191;</span>
          </li>
          <li className="col rightCol">
            <span>&#x2197;</span>
          </li>
        </ul>
        <ul className="row middleRow">
          <li className="col leftCol">
            <span>&#x2190;</span>
          </li>
          <li className="col centerCol">
            <SpinningIcon />
          </li>
          <li className="col rightCol">
            <span>&#x2192;</span>
          </li>
        </ul>
        <ul className="row bottomRow">
          <li className="col leftCol">
            <span>&#x2199;</span>
          </li>
          <li className="col centerCol">
            <span>&#x2193;</span>
          </li>
          <li className="col rightCol">
            <span>&#x2198;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplashGrid;
