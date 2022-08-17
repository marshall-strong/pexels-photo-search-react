import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [displayedUrl, setDisplayedUrl] = useState(null);
  const [newUrl, setNewUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");

  // Pexels URLs
  // https://api.pexels.com/v1/curated/?page=1&per_page=10
  const attributionUrl = "https://www.pexels.com/api/";
  const baseUrl = "https://api.pexels.com/v1/";
  const homeUrl = baseUrl + "curated/?page=1&per_page=10";

  const returnToHomepage = () => {
    setNewUrl(homeUrl);
    setUserInput("");
  };

  // When the App loads for the first time and there is no `displayedUrl` value
  //  in localStorage, set `newUrl` equal to the homepage URL.
  useEffect(() => {
    const localStorageUrl = JSON.parse(
      window.localStorage.getItem("displayedUrl")
    );
    if (!displayedUrl && !newUrl && !localStorageUrl) {
      setNewUrl(homeUrl);
    }
  }, [displayedUrl, newUrl, homeUrl]);

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
      const apiEndpointSubstring =
        newUrl.substring(26, 32) === "search"
          ? "?endpoint=search&"
          : "?endpoint=curated&";
      const remainingParamsSubstring = newUrl.split("?")[1];
      const netlifyUrl =
        `/.netlify/functions/fetchPexelsPhotos` +
        apiEndpointSubstring +
        remainingParamsSubstring;
      // send the Pexels API request using a Netlify function to avoid exposing the secret key
      try {
        // the Netlify function receives the API response as an object, but
        //  converts it to a string with `JSON.stringify` before returning
        const netlifyResponse = await fetch(netlifyUrl).then((res) =>
          res.json()
        );
        setResponse(netlifyResponse);
        setDisplayedUrl(newUrl);
        setNewUrl(null);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    // invoke the async fetch function declared above if the conditions are met
    if (newUrl) {
      fetchPexelsPhotos();
    }
  }, [displayedUrl, newUrl, userInput, response]);

  return (
    <div className="app-component">
      <Navbar
        attributionUrl={attributionUrl}
        returnToHomepage={returnToHomepage}
        response={response}
        displayedUrl={displayedUrl}
        setNewUrl={setNewUrl}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <Gallery
        response={response}
        userInput={userInput}
        returnToHomepage={returnToHomepage}
      />
      <Footer />
    </div>
  );
};

export default App;
