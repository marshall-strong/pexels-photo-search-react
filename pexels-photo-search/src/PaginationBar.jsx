import React from "react";
import Pagination from "./Pagination";
import "./PaginationBar.css";

const PaginationBar = ({ response, setNewUrl }) => {
  if (!response) {
    return null;
  } else {
    const resultsPage = response.page ? (
      <div className="resultsPage">
        <span>
          Page <b>{response.page}</b>
        </span>
      </div>
    ) : (
      <span>Pexels Curated Photos Collection</span>
    );

    return (
      <div className="PaginationBar">
        <Pagination
          prevOrNext={"prev"}
          setNewUrl={setNewUrl}
          pageUrl={response.prev_page}
        />
        <div className="paginationText">{resultsPage}</div>
        <Pagination
          prevOrNext={"next"}
          setNewUrl={setNewUrl}
          pageUrl={response.next_page}
        />
      </div>
    );
  }
};

export default PaginationBar;
