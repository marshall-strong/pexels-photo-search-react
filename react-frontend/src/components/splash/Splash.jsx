import React from "react";
import SpinningIcon from "./SpinningIcon";
import "./Splash.css";

const Splash = ({ _attributionUrl, _returnToHomepage }) => {
  return (
    <div className="splash-component">
      <div className="matrix-layout">
        <ul className="row middle-row">
          <li className="col left-col">
            React Photo Search
            {/* <span>&#x2190;</span> */}
          </li>
          <li className="col center-col">
            <SpinningIcon />
          </li>
          <li className="col right-col">
            Powered by Pexels
            {/* <span>&#x2192;</span> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Splash;
