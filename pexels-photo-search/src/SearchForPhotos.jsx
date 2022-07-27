import React from "react";
import "./SearchForPhotos.css";

const SearchForPhotos = ({ setNewUrl, userInput, setUserInput, returnToHomepage }) => {
  // const [userInput, setUserInput] = useState("");
  // const [encodedURI, setEncodedURI] = useState("");
  
  const handleUserInput = (event) => {
    setUserInput(event.target.value);

  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const uri = `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`;
    const encodedURI = encodeURI(uri);
    // setEncodedURI(encoded);
    setNewUrl(encodedURI);
    console.log('search form submitted');
  };

  // const searchForElephants = () =>
  //   setNewUrl(
  //     "https://api.pexels.com/v1/search/?page=1&per_page=10&query=elephants"
  //   );

  return (
    <div className="SearchForPhotos">
      <button onClick={returnToHomepage}>Return to Homepage</button>
      <p>Search for Photos</p>
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
      {/* <button onClick={searchForElephants}>Search for Elephants</button> */}
    </div>
  );
};

export default SearchForPhotos;
