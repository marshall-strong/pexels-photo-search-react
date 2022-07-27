import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import SearchForPhotos from "./SearchForPhotos";
import PaginationBar from "./PaginationBar";
import "./Gallery.css";

const Gallery = () => {
  const [displayedUrl, setDisplayedUrl] = useState(null);
  const [newUrl, setNewUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");
  
  const homepageURL = `https://api.pexels.com/v1/curated/?page=1&per_page=10`;

  const returnToHomepage = () => {
    setNewUrl(homepageURL);
    setUserInput("");
  };

  // When the App loads for the first time and there is no `displayedUrl` value
  //  in localStorage, set `newUrl` equal to the homepage URL.
  useEffect(() => {
    const localStorageUrl = JSON.parse(
      window.localStorage.getItem("displayedUrl")
    );
    if (!displayedUrl && !newUrl && !localStorageUrl) {
      setNewUrl(`https://api.pexels.com/v1/curated/?page=1&per_page=10`);
    }
  }, [displayedUrl, newUrl]);

  // When a user reloads the App, `displayedUrl` and `newUrl` are both `null`,
  //  but `localStorage` may have the previous URL
  useEffect(() => {
    const localStorageUrl = JSON.parse(
      window.localStorage.getItem("displayedUrl")
    );
    if (!displayedUrl && !newUrl && !!localStorageUrl) {
      setNewUrl(localStorageUrl);
    }
  }, [displayedUrl, newUrl]);

  // Update the value of `displayedUrl` in localStorage every time the value of
  //  `displayedUrl` in state changes.
  useEffect(() => {
    if (!!displayedUrl) {
      window.localStorage.setItem("displayedUrl", JSON.stringify(displayedUrl));
    }
  }, [displayedUrl]);

  // If `displayedUrl` and `newUrl` both exist and are not equal to eachother,
  //  submit a fetch request for `newUrl`. This occurs whenever a new photo
  //  search is submitted, and whenever a pagination button is clicked.
  useEffect(() => {
    // Declare the data fetching function INSIDE the `useEffect` code block:
    const fetchPhotos = async () => {
      // get the data from the api
      const response = await fetch(newUrl, {
        method: "GET",
        headers: {
          Authorization:
            "563492ad6f91700001000001d3694f5f3f444938a2621cfc666c0cc4",
        },
      });
      // convert the response data to json
      const json = await response.json();
      // set state with the result
      setResponse(json);
      setDisplayedUrl(newUrl);
      setNewUrl(null);
    };

    // Call the data fetching function if `newUrl` is NOT null
    if (newUrl) {
      fetchPhotos().catch((e) => {
        console.log(e.message);
      });
    }
  }, [displayedUrl, newUrl, userInput, response]);

  return (
    <div className="Gallery">
      <div className="SearchContainer">
        <SearchForPhotos
          setNewUrl={setNewUrl}
          userInput={userInput}
          setUserInput={setUserInput}
          returnToHomepage={returnToHomepage}
        />
      </div>
      <PaginationBar
        response={response}
        setNewUrl={setNewUrl}
        displayedUrl={displayedUrl}
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
      <PaginationBar
        response={response}
        setNewUrl={setNewUrl}
        displayedUrl={displayedUrl}
      />
    </div>
  );
};

export default Gallery;
