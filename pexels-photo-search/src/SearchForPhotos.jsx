import React from "react";
import "./SearchForPhotos.css";

const SearchForPhotos = ({ setNextUrl }) => {
  const searchForElephants = () =>
    setNextUrl("https://api.pexels.com/v1/search?query=elephants&per_page=10");

  return (
    <div className="SearchForPhotos">
      <p>Search for Photos</p>
      <form id="search-for-photos">
        <input
          type="text"
          placeholder="Enter a topic to search Pexels for relevant photos (ex: 'elephants on parade')"
        />
      </form>
      <button onClick={searchForElephants}>Search for Elephants</button>
    </div>
  );
};

export default SearchForPhotos;
