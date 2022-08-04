import React from "react";
import leftArrowIcon from "./img/arrowLeftIcon.svg";
import rightArrowIcon from "./img/arrowRightIcon.svg";
import leftChevronIcon from "./img/circleChevronLeftIcon.svg";
import rightChevronIcon from "./img/circleChevronRightIcon.svg";
import "./Pagination.css";

const PrevPagePagination = ({ pageUrl, setNewUrl }) => {
  if (!pageUrl) { 
      // Previous Page button, disabled
      return (
        <div className="PrevPagePagination">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="icon"
            alt="Previous Page"
            title="Previous Page"
          >
            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
          </svg>
          {/* <img
            alt="Previous Page"
            className="icon"
            // onClick={paginateToPrevPage}
            src={leftArrowIcon}
            title="Previous Page"
          /> */}
        </div>
      );
    } else {
      // Defines a click-handler callback for paginating to the previous page
      const paginateToPrevPage = () => setNewUrl(pageUrl);
      // Previous Page button, enabled
      return (
        <div className="PrevPagePagination">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="icon"
            onClick={paginateToPrevPage}
            alt="Previous Page"
            title="Previous Page"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
          </svg>
          {/* <img
            alt="Previous Page"
            className="icon"
            onClick={paginateToPrevPage}
            src={leftChevronIcon}
            title="Previous Page"
          /> */}
        </div>
      );
    }
};

const NextPagePagination = ({ pageUrl, setNewUrl }) => {
  if (!pageUrl) {
    // Next Page button, disabled
    return (
      <div className="NextPagePagination">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="icon"
          alt="Next Page"
          title="Next Page"
        >
          <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
        </svg>
        {/* <img
          alt="Next Page"
          className="icon"
          // onClick={paginateToNextPage}
          src={rightArrowIcon}
          title="Next Page"
        /> */}
      </div>
    );
  } else {
    // Defines a click-handler callback for paginating to the next page
    const paginateToNextPage = () => setNewUrl(pageUrl);
    // Next Page button, enabled
    return (
      <div className="NextPagePagination">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="icon"
          onClick={paginateToNextPage}
          alt="Next Page"
          title="Next Page"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
        </svg>
        {/* <img
          alt="Next Page"
          className="icon"
          onClick={paginateToNextPage}
          src={rightChevronIcon}
          title="Next Page"
        /> */}
      </div>
    );
  }
};

const Pagination = ({ prevOrNext, pageUrl, setNewUrl }) => {
  if (prevOrNext === "prev") {
    return <PrevPagePagination pageUrl={pageUrl} setNewUrl={setNewUrl} />;
  } else if (prevOrNext === "next") {
    return <NextPagePagination pageUrl={pageUrl} setNewUrl={setNewUrl} />;
  }
};

export default Pagination;
