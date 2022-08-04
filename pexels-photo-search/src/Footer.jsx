import React from "react";
import pexelsColoredLogo from "./img/pexelsLogoOnTransparent.png";
// import pexelsIcon from "./img/pexelsIcon.svg"
// import pexelsBlackLogo from "./img/pexelsBlackLogoOnTransparent.png";
// import pexelsWhiteLogo from "./img/pexelsWhiteLogoOnTransparent.png";
import githubIcon from "./img/githubIcon.svg";
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
      <div className="rightNav">
        <a
          href="https://github.com/marshall-strong/react-photo-search"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub README"
        >
          <div className="textContainer">
            <div>Wanna find out how this site was made? &#129488;</div>
            <div>Check out the README on GitHub &#128064;</div>
            <div>Thanks for visiting! &#129505;</div>
          </div>
          <img
            alt="GitHub Readme"
            className="icon"
            src={githubIcon}
            title="GitHub Readme"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
