import React from "react";
import "./Footer.css";
import logoPexels from "./logoPexels.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logoPexels} className="logoPexels" alt="Pexels logo" />
      <div>Powered by Pexels</div>
    </div>
  );
};

export default Footer;
