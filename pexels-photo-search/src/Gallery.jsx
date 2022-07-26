import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Photo from "./Photo";
import SearchForPhotos from "./SearchForPhotos";
import PaginationBar from "./PaginationBar";

const Gallery = () => {
  const homepageURL = `https://api.pexels.com/v1/curated/?page=1&per_page=10`;

  const [displayedUrl, setDisplayedUrl] = useState(null);
  const [newUrl, setNewUrl] = useState(homepageURL);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState(
    window.localStorage.getItem("userInput")
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setUserInput(window.localStorage.getItem('userInput'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('userInput', userInput);
  }, [userInput]);

  const fetchPhotos = (url) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f91700001000001d3694f5f3f444938a2621cfc666c0cc4",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`response is not okay.`);
        } else {
          setDisplayedUrl(url);
          setNewUrl(null);
          setSearchQuery(userInput);
          console.log(response);
          return response.json();
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    if (
      (!displayedUrl && newUrl) ||
      (displayedUrl && newUrl && (displayedUrl !== newUrl))
    ) {
      fetchPhotos(newUrl)
        .then((response) => {
          setResponse(response);
        })
        .catch((e) => console.log(e.message));
    }
  }, [displayedUrl, newUrl]);

  const returnToHomepage = () => {
    setNewUrl(homepageURL);
    setUserInput("");
    setSearchQuery("");
  };

  return (
    <div className="Gallery">
      <div className="SearchContainer">
        <SearchForPhotos
          setNewUrl={setNewUrl}
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </div>
      <PaginationBar
        response={response}
        searchQuery={searchQuery}
        setNewUrl={setNewUrl}
      />
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
            <p>
              Suggestions:
            </p>
            <div>
              <ul>Make sure all words are spelled correctly.</ul>
              <ul>Try different keywords.</ul>
              <ul>Try more general keywords.</ul>
              <ul>Try fewer keywords.</ul>
            </div>
            <button onClick={returnToHomepage}>Return to Homepage</button>
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
      <PaginationBar
        response={response}
        searchQuery={searchQuery}
        setNewUrl={setNewUrl}
      />
    </div>
  );
};

export default Gallery;
