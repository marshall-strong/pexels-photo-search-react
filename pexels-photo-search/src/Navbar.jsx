import React from "react";
import "./Navbar.css";
import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";

const pexelsUrl = "https://www.pexels.com/api/";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftNav">left nav</div>
      <div className="centerNav">
        <div className="navbarTitle">React Photo Search App</div>
        <div className="navbarSubtitle">
          <a href={pexelsUrl} target="_blank" rel="noopener noreferrer">
            <div className="textWrapper">Powered by </div>
            <div className="imgWrapper">
              <img
                src={pexelsColoredLogo}
                className="pexelsIcon"
                alt="Powered by Pexels"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="rightNav">right nav</div>
    </div>
  );
};

export default Navbar;
