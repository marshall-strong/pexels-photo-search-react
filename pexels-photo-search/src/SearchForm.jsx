import React from "react";
import searchIcon from "./img/searchIcon.svg";
import "./SearchForm.css";

const SearchForm = ({
  setNewUrl,
  userInput,
  setUserInput,
}) => {
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const uri = `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`;
    const encodedURI = encodeURI(uri);
    setNewUrl(encodedURI);
    console.log("search form submitted");
  };

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} id="search-for-photos">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter a topic or keywords to search Pexels for relevant photos (ex: 'lions tigers bears')"
        />
        <button type="submit" hidden>
          Search for Photos
        </button>
      </form>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="icon"
        onClick={handleSubmit}
        alt="Search"
        title="Search for Photos"
      >
        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
      </svg>
      {/* <img
        src={searchIcon}
        className="icon"
        onClick={handleSubmit}
        alt="Search"
        title="Search for Photos"
      /> */}
      {/* <button onClick={handleSubmit}>Search for Photos</button> */}
    </div>
  );
};

export default SearchForm;
