import React from "react";
import "./Pagination.css";

const PrevPagePagination = ({ pageUrl, setNewUrl }) => {
  // click-handler callback for pagination
  const paginateToPrevPage = () => setNewUrl(pageUrl);

  const iconPrevPageDisabled = (
    <div
      className="prev-page-pagination-component"
      title="you are on the first page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="icon disabled"
        // onClick={paginateToPrevPage}
        alt="Previous Page"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
      </svg>
    </div>
  );

  const iconPrevPageEnabled = (
    <div className="prev-page-pagination-component" title="Previous Page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="icon enabled"
        onClick={paginateToPrevPage}
        alt="Previous Page"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
      </svg>
    </div>
  );

  if (!pageUrl) {
    return (
      <div className="pagination-component previous-page">
        {iconPrevPageDisabled}
      </div>
    );
  } else {
    return (
      <div className="pagination-component previous-page">
        {iconPrevPageEnabled}
      </div>
    );
  }
};

const NextPagePagination = ({ pageUrl, setNewUrl }) => {
  // click-handler callback for pagination
  const paginateToNextPage = () => setNewUrl(pageUrl);

  const iconNextPageDisabled = (
    <div
      className="next-page-pagination-component"
      title="you have reached the last page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="icon disabled"
        // onClick={paginateToNextPage}
        alt="Next Page"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
      </svg>
    </div>
  );

  const iconNextPageEnabled = (
    <div className="next-page-pagination-component" title="Next Page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="icon enabled"
        onClick={paginateToNextPage}
        alt="Next Page"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
      </svg>
    </div>
  );

  if (!pageUrl) {
    return (
      <div className="pagination-component next-page">
        {iconNextPageDisabled}
      </div>
    );
  } else {
    return (
      <div className="pagination-component next-page">
        {iconNextPageEnabled}
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
