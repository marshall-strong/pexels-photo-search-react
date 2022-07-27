import React from "react";
import PersonalLinks from "./PersonalLinks";
import "./Footer.css";
import pexelsIcon from "./img/pexelsIcon.svg"
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
            className="pexelsIcon"
            alt="Powered by Pexels"
          />
        </div>
      </div>
      <div className="centerNav">
        <div className="copyright">Copyright &copy; 2022 Marshall Strong</div>
      </div>
      <div className="rightNav">
        <PersonalLinks />
      </div>
    </div>
  );
};

export default Footer;
