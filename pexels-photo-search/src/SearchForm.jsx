import React from "react";
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
      <button onClick={handleSubmit}>Search for Photos</button>
    </div>
  );
};

export default SearchForm;
