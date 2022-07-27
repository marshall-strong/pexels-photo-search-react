import React from "react";
import "./Footer.css";
import pexelsLogo from "./img/pexelsLogo.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <img src={pexelsLogo} className="pexelsLogo" alt="Powered by Pexels" />
      <div>Powered by Pexels</div>
    </div>
  );
};

export default Footer;
