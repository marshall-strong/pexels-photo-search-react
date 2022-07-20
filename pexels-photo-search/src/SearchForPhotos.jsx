import React, { useState } from "react";
import "./SearchForPhotos.css";

const SearchForPhotos = ({ setNextUrl }) => {
  const [userInput, setUserInput] = useState("");
  const [encodedURI, setEncodedURI] = useState("");
  
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    const uri = `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`;
    const encoded = encodeURI(uri);
    setEncodedURI(encoded);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setNextUrl(encodedURI);
    console.log('search form submitted');
  };

  // const searchForElephants = () =>
  //   setNextUrl(
  //     "https://api.pexels.com/v1/search/?page=1&per_page=10&query=elephants"
  //   );

  return (
    <div className="SearchForPhotos">
      <p>Search for Photos</p>
      <form onSubmit={handleSubmit} id="search-for-photos">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter a topic to search Pexels for relevant photos (ex: 'elephants on parade')"
        />
        <button type="submit" hidden>
          Search for Photos
        </button>
      </form>
      <button onClick={handleSubmit}>Search for Photos</button>
      {/* <button onClick={searchForElephants}>Search for Elephants</button> */}
    </div>
  );
};

export default SearchForPhotos;
