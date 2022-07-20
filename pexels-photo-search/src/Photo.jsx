import React from "react";
import "./Photo.css";
import logo from "./logo.svg";

const Photo = ({ photoData }) => {
  return (
    <div className="Photo">
      <div>
        {!photoData ? (
          <div>
            <p>Loading...</p>
            <img src={logo} alt="react logo"/>
          </div>
        ) : (
          <div>
            <img src={photoData.src.medium} alt="alt text"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photo;
