import React from "react";
import SpinningIcon from "./SpinningIcon";
// import reactIcon from "./img/reactIcon.svg";
// import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
import "./SplashGrid.css";

const SplashGrid = ({ attributionUrl, returnToHomepage }) => {  
  const iconHome = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="icon enabled"
      onClick={returnToHomepage}
      alt="Return to Homepage"
      title="Return to Homepage"
    >
      <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
    </svg>
  );

  return (
    <div className="SplashGrid">
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
