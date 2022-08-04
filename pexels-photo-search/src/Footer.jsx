import React from "react";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsIcon from "./img/pexelsIcon.svg"
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import "./Footer.css";

const Footer = ({ attributionUrl }) => {
  return (
    <div className="Footer">
      <div className="leftNav">
        <a
          href={attributionUrl}
          rel="noopener noreferrer"
          target="_blank"
          title="Start building with the power of Pexels!"
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
            href="https://marshallstrong.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="Marshall Strong"
          >
            Marshall Strong
          </a>
        </div>
      </div>
      <div className="rightNav"></div>
    </div>
  );
};

export default Footer;
