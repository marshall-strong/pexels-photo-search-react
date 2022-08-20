import React from "react";
import SpinningIcon from "./SpinningIcon";
import SearchForm from "./SearchForm";
import Results from "./Results";
import Pagination from "./Pagination";
import "./Navbar.css";

const LeftPagination = ({ response, setNewUrl }) => {
  if (!response) {
    return null;
  } else {
    return (
      <Pagination
        prevOrNext={"prev"}
        setNewUrl={setNewUrl}
        pageUrl={response.prev_page}
      />
    );
  }
};

const RightPagination = ({ response, setNewUrl }) => {
  if (!response) {
    return null;
  } else {
    return (
      <Pagination
        prevOrNext={"next"}
        setNewUrl={setNewUrl}
        pageUrl={response.next_page}
      />
    );
  }
};

const PageNumber = ({ response }) => {
  if (!response) {
    return null;
  } else if (!response.page) {
    return (
      <span>
        Page <b>#</b>
      </span>
    );
  } else {
    return (
      <span>
        Page <b>{response.page}</b>
      </span>
    );
  }
};

const Navbar = ({
  attributionUrl,
  returnToHomepage,
  response,
  displayedUrl,
  setNewUrl,
  userInput,
  setUserInput,
}) => {
  const iconHome = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="icon enabled home-icon"
      onClick={returnToHomepage}
      alt="Return to Homepage"
      title="Return to Homepage"
    >
      <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
    </svg>
  );

  return (
    <div className="navbar-component">
      <div className="navbar-row row-1">
        <div className="left-nav">
          <SpinningIcon
            onClick={returnToHomepage}
            alt="SpinningIcon"
            title="Return to Homepage"
          />
        </div>
        <div className="center-nav">
          <div className="title-container">
            <a
              href="https://github.com/marshall-strong/react-photo-search"
              rel="noopener noreferrer"
              target="_blank"
              title="View GitHub repository"
              className="navbar-title"
            >
              React Photo Search
            </a>
            <div className="navbar-subtitle">
              <div className="text-wrapper">
                <a
                  href={attributionUrl}
                  className="powered-by-pexels"
                  rel="noopener noreferrer"
                  target="_blank"
                  alt="Powered by Pexels"
                  title="Pexels: The best free stock photos, royalty free images & videos shared by creators"
                >
                  Powered by Pexels
                </a>
                <a
                  href="https://marshallstrong.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Marshall Strong's Portfolio"
                >
                  Created by Marshall Strong
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-nav">{iconHome}</div>
      </div>
      {/* <div className="navbar-row row-2">
        <PageNumber response={response} />
        <Results response={response} displayedUrl={displayedUrl} />
      </div> */}
      <div className="navbar-row row-3">
        <div className="left-nav">
          <LeftPagination response={response} setNewUrl={setNewUrl} />
        </div>
        <div className="center-nav">
          <SearchForm
            setNewUrl={setNewUrl}
            userInput={userInput}
            setUserInput={setUserInput}
            returnToHomepage={returnToHomepage}
          />
        </div>
        <div className="right-nav">
          <RightPagination response={response} setNewUrl={setNewUrl} />
        </div>
      </div>
      <div className="navbar-row row-4">
        <Results response={response} displayedUrl={displayedUrl} />
      </div>
      <div className="navbar-row row-5">
        <PageNumber response={response} />
      </div>
    </div>
  );
};

export default Navbar;
