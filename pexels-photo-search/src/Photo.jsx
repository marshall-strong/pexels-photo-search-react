import React from "react";
import reactIcon from "./img/reactIcon.svg";
import "./Photo.css";

const Photo = ({ photoData }) => {
  if (!photoData) {
    return (
      <li className="Photo">
        <div className="loading">
          <p>Loading...</p>
          <img src={reactIcon} className="spinningLogo" alt="react logo" />
        </div>
      </li>
    );
  } else {
    return (
      <li className="Photo">
        {/* <div className="photoImage"> */}
          <a href={photoData.url} target="_blank" rel="noopener noreferrer">
            <img src={photoData.src.medium} alt="alt text" />
          </a>
        {/* </div> */}
        {/* <div className="photoCredit">
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
        </div> */}
      </li>
    );
  }
};

export default Photo;
