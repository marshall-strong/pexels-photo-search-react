import React from "react";
import "./Pagination.css";

const Pagination = ({ prevOrNext, setNewUrl, pageUrl }) => {
  if (prevOrNext === "prev") {
    const prevBtnText = "<= Previous Page";
    if (!pageUrl) {
      return (
        <button type="button" disabled>
          {prevBtnText}
        </button>
      );
    } else {
      const paginateToPrevPage = () => setNewUrl(pageUrl);
      return (
        <button type="button" onClick={paginateToPrevPage}>
          {prevBtnText}
        </button>
      );
    }
  } else if (prevOrNext === "next") {
    const nextBtnText = "Next Page =>";
    if (!pageUrl) {
      return (
        <button type="button" disabled>
          {nextBtnText}
        </button>
      );
    } else {
      const paginateToNextPage = () => setNewUrl(pageUrl);
      return (
        <button type="button" onClick={paginateToNextPage}>
          {nextBtnText}
        </button>
      );
    }
  }
};

export default Pagination;
