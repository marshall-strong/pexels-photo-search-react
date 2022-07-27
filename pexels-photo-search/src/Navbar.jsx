import React from "react";
import "./Navbar.css";
import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftNav">left nav</div>
      <div className="centerNav">
        <div className="navbarTitle">React Photo Search App</div>
        <div className="navbarSubtitle">
          <div className="textWrapper">Powered by </div>
          <div className="imgWrapper">
            <img
              src={pexelsColoredLogo}
              className="pexelsLogo"
              alt="Powered by Pexels"
            />
          </div>
        </div>
      </div>
      <div className="rightNav">right nav</div>
    </div>
  );
};

export default Navbar;
