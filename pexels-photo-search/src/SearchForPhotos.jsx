import React from "react";
import "./SearchForPhotos.css";

const Search = () => {
  return (
    <div className="SearchForPhotos">
      <p>Search</p>
      <form id="search-for-photos">
        <input
          type="text"
          placeholder="Enter a topic to search Pexels for relevant photos (ex: 'Elephants on parade')"
        />
      </form>
    </div>
  );
};

export default Search;
