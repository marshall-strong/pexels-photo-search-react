import React from "react";
// import PersonalLinks from "./PersonalLinks";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsIcon from "./img/pexelsIcon.svg"
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import "./Footer.css";

const pexelsUrl = "https://www.pexels.com/api/";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="leftNav">
        <a
          title="Powered by Pexels"
          href={pexelsUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="imgWrapper">
            <img
              src={pexelsColoredLogo}
              className="pexelsIcon"
              alt="Powered by Pexels"
            />
          </div>
        </a>
      </div>
      <div className="centerNav">
        <div className="copyright">
          &copy;
          {" 2022 by "}
          <a
            title="Marshall Strong's Portfolio"
            href="https://marshallstrong.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marshall Strong
          </a>
        </div>
      </div>
      <div className="rightNav">
        {/* <PersonalLinks /> */}
      </div>
    </div>
  );
};

export default Footer;
