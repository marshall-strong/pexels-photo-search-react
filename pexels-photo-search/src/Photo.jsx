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
            <img src={logo} />
          </div>
        ) : (
          <div>
            <img src={photoData.src.medium} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photo;
