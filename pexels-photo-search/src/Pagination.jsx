import React from "react";
import "./Pagination.css";

const Pagination = ({
  prevOrNext,
  setNewUrl,
  response,
}) => {
  if (prevOrNext === "prev") {
    const prevBtnText = "Previous Page <="
    if (!response.prev_page) {
      return (
        <button type="button" isDisabled={true}>
          {prevBtnText}
        </button>
      );
    } else {
      const paginateToPrevPage = () => setNewUrl(response.prev_page);
      return (
        <button type="button" onClick={paginateToPrevPage}>
          {prevBtnText}
        </button>
      );
    }
  } else if (prevOrNext === "next") {
    const nextBtnText = "Next Page =>";
    if (!response.next_page) {
      return (
        <button type="button" isDisabled={true}>
          {nextBtnText}
        </button>
      );
    } else {
      const paginateToNextPage = () => setNewUrl(response.next_page);
      return (
        <button type="button" onClick={paginateToNextPage}>
          {nextBtnText}
        </button>
      );
    }
  }
};

export default Pagination;
