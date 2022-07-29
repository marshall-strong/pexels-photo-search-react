import React from "react";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import "./Navbar.css";

const pexelsUrl = "https://www.pexels.com/api/";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <span>
          This App is currently running in <b>{process.env.NODE_ENV}</b> mode.
        </span>
      </div>
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
      <div className="rightNav">{/* right nav */}</div>
    </div>
  );
};

export default Navbar;
