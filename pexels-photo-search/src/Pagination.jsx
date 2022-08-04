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
          <img
            alt="Previous Page"
            className="icon"
            // onClick={paginateToPrevPage}
            src={leftArrowIcon}
            title="Previous Page"
          />
        </div>
      );
    } else {
      // Defines a click-handler callback for paginating to the previous page
      const paginateToPrevPage = () => setNewUrl(pageUrl);
      // Previous Page button, enabled
      return (
        <div className="PrevPagePagination">
          <img
            alt="Previous Page"
            className="icon"
            onClick={paginateToPrevPage}
            src={leftChevronIcon}
            title="Previous Page"
          />
        </div>
      );
    }
};

const NextPagePagination = ({ pageUrl, setNewUrl }) => {
  if (!pageUrl) {
    // Next Page button, disabled
    return (
      <div className="NextPagePagination">
        <img
          alt="Next Page"
          className="icon"
          // onClick={paginateToNextPage}
          src={rightArrowIcon}
          title="Next Page"
        />
      </div>
    );
  } else {
    // Defines a click-handler callback for paginating to the next page
    const paginateToNextPage = () => setNewUrl(pageUrl);
    // Next Page button, enabled
    return (
      <div className="NextPagePagination">
        <img
          alt="Next Page"
          className="icon"
          onClick={paginateToNextPage}
          src={rightChevronIcon}
          title="Next Page"
        />
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
