import React from "react";
import PersonalLinks from "./PersonalLinks";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import "./Navbar.css";

const Navbar = ({ attributionUrl, returnToHomepage }) => {
  console.log(`This App is currently running in ${process.env.NODE_ENV} mode.`);
  return (
    <div className="Navbar">
      <div className="leftNav">
        <div className="navbarTitle">React Photo Search App</div>
        <div className="navbarSubtitle">
          <a
            title="Powered by Pexels"
            href={attributionUrl}
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
      <div className="centerNav">
        <button onClick={returnToHomepage}>Return to Homepage</button>
      </div>
      <div className="rightNav">
        <PersonalLinks />
      </div>
    </div>
  );
};

export default Navbar;
