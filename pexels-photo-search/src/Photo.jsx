import React from "react";
import "./Photo.css";
import logo from "./logo.svg";

const Photo = ({ photoData }) => {
  if (!photoData) {
      return (
        <div className="Photo">
          <div className="loading">
            <p>Loading...</p>
            <img src={logo} className="spinningLogo" alt="react logo" />
          </div>
        </div>
      );
  } else {
      return (
        <div className="Photo">
          <div>
            <a href={photoData.url} target="_blank" rel="noopener noreferrer">
              <img src={photoData.src.medium} alt="alt text" />
            </a>
          </div>
          <div>
            <p className="photoCredit">
              <span>Photo by </span>
              <span>
                <a
                  href={photoData.photographer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>{photoData.photographer}</b>
                </a>
              </span>
              <span> on Pexels</span>
            </p>
          </div>
        </div>
      );
  }
};

export default Photo;
