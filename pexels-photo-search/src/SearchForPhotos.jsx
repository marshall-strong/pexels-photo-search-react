import React, { useState } from "react";
import "./SearchForPhotos.css";

const SearchForPhotos = ({ setNextUrl }) => {
  const searchForElephants = () =>
    setNextUrl("https://api.pexels.com/v1/search?query=elephants&per_page=10");

  const [userInput, setUserInput] = useState(null);
  const [encodedURI, setEncodedURI] = useState(null);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    const uri = `https://api.pexels.com/v1/search?query=${userInput}&per_page=10`;
    const encoded = encodeURI(uri);
    setEncodedURI(encoded);
  };

  const submitSearchRequest = () => setNextUrl(encodedURI);

  return (
    <div className="SearchForPhotos">
      <p>Search for Photos</p>
      <form id="search-for-photos">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter a topic to search Pexels for relevant photos (ex: 'elephants on parade')"
        />
        {/* <input type="submit" value="Find Photos" /> */}
      </form>
      <button onClick={submitSearchRequest}>Search for Photos</button>
      <button onClick={searchForElephants}>Search for Elephants</button>
    </div>
  );
};

export default SearchForPhotos;
