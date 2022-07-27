import React from "react";
import "./Footer.css";
import pexelsLogo from "./img/pexelsLogo.svg"
import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="leftNav">
        <div className="imgWrapper">
          <img
            src={pexelsColoredLogo}
            className="pexelsLogo"
            alt="Powered by Pexels"
          />
        </div>
      </div>
      <div className="centerNav">
        <div className="copyright">Copyright © 2022 Marshall Strong</div>
      </div>
      <div className="rightNav">
        <img src={pexelsLogo} className="pexelsLogo" alt="Powered by Pexels" />
        <div>Powered by Pexels</div>
      </div>
    </div>
  );
};

export default Footer;
