import React from "react";
import LoadingIcon from "./LoadingIcon";
import "./Photo.css";

const Photo = ({ photoData }) => {
  if (!photoData) {
    return (
      <li className="photo-component">
        <LoadingIcon />
      </li>
    );
  } else {
    return (
      <li className="photo-component">
        <a href={photoData.url} target="_blank" rel="noopener noreferrer">
          <img src={photoData.src.medium} alt="alt text" />
        </a>
        <div className="photo-credit">
          <span>Photo by </span>
          <span className="photographer">
            <a
              href={photoData.photographer_url}
              target="_blank"
              rel="noopener noreferrer"
              className="photographer-url"
            >
              <b>{photoData.photographer}</b>
            </a>
          </span>
        </div>
      </li>
    );
  }
};

export default Photo;
