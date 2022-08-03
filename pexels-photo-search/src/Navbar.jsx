import React from "react";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import "./Navbar.css";

const pexelsUrl = "https://www.pexels.com/api/";

const Navbar = () => {
  console.log(
    `This App is currently running in ${process.env.NODE_ENV} mode.`
  );
  return (
    <div className="Navbar">
      <div className="leftNav"></div>
      <div className="centerNav">
        <div className="navbarTitle">React Photo Search App</div>
        <div className="navbarSubtitle">
          <a
            title="Powered by Pexels"
            href={pexelsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
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
      <div className="rightNav"></div>
    </div>
  );
};

export default Navbar;
