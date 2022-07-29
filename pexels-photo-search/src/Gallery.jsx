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

  const returnToHomepage = () => {
    setNewUrl(`https://api.pexels.com/v1/curated/?page=1&per_page=10`);
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
    const fetchPexelsPhotos = async () => {
      // get substrings from `newUrl` to use as query string parameters when constructing `netlifyUrl`
      const endpointSubstring =
        newUrl.substring(26, 32) === "search"
          ? "?endpoint=search&"
          : "?endpoint=curated&";
      const remainingParamsSubstring = newUrl.split('?')[1];
      const netlifyUrl = `/.netlify/functions/fetchPexelsPhotos` + endpointSubstring + remainingParamsSubstring;
      // send the Pexels API request using a Netlify function to avoid exposing the secret key
      try {
        // the Netlify function receives the API response as an object, but 
        //  converts it to a string with `JSON.stringify` before returning
        const netlifyResponse = await fetch(netlifyUrl).then((res) => res.json());
        setResponse(netlifyResponse);
        setDisplayedUrl(newUrl);
        setNewUrl(null);
      } catch(err) {
        console.log(err);
      } finally {}
    }

    // invoke the async fetch function declared above if the conditions are met
    if (newUrl) {
      fetchPexelsPhotos();
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
