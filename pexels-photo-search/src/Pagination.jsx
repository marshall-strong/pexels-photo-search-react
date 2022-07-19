import React from "react";
import "./Pagination.css";

const PrevPagePagination = ({ isDisabled, onClick }) => {
  if (isDisabled) {
    return (
      <button type="button" disabled>
        previous page
      </button>
    );
  } else {
    return (
      <button type="button" onClick={onClick}>
        previous page
      </button>
    );
  }
};

const NextPagePagination = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      next page
    </button>
  );
};

const Pagination = ({
  prevOrNext,
  currentPage,
  prevPageUrl,
  nextPageUrl,
  setNextUrl,
}) => {
  const setPrevPageAsNextUrl = () => setNextUrl(prevPageUrl);
  const setNextPageAsNextUrl = () => setNextUrl(nextPageUrl);

  if (prevOrNext === "prev") {
    if (currentPage === 1) {
      return (<PrevPagePagination isDisabled={true} />);
    } else {
      return (
        <PrevPagePagination isDisabled={false} onClick={setPrevPageAsNextUrl} />
      );
    }
  } else if (prevOrNext === "next") {
    return (
      <NextPagePagination onClick={setNextPageAsNextUrl} />
    );
  }
};

export default Pagination;
