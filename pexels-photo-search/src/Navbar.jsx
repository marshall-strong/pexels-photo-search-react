import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftNav"></div>
      <div className="centerNav">
        <div className="navbarTitle">React Photo Search App</div>
        <div className="navbarSubtitle">Powered by Pexels</div>
      </div>
      <div className="rightNav"></div>
    </div>
  );
};

export default Navbar;
