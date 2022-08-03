import React from "react";
import Photo from "./Photo";
import "./Gallery.css";

const Gallery = ({ response, userInput, returnToHomepage }) => {
  return (
    <div className="Gallery">
      <div className="galleryContainer">
        {!response ? (
          <div>
            <p>Waiting on Pexels API response...</p>
          </div>
        ) : response.total_results <= 0 ? (
          <div>
            <p>
              Your search - <b>{userInput}</b> - did not match any photos.
            </p>
            <p>Suggestions:</p>
            <div>
              <ul>Make sure all words are spelled correctly.</ul>
              <ul>Try different keywords.</ul>
              <ul>Try more general keywords.</ul>
              <ul>Try fewer keywords.</ul>
            </div>
            <button onClick={returnToHomepage}>Return to Homepage</button>
          </div>
        ) : !response.photos ? (
          <div className="paginationContainer">
            <div className="galleryPhotos"></div>
          </div>
        ) : (
          <div className="paginationContainer">
            <div className="galleryPhotos">
              {response.photos.map((photoData, index) => (
                <React.Fragment key={index}>
                  <Photo photoData={photoData} />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
