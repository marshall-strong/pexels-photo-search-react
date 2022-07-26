import React from "react";
import Pagination from "./Pagination";
import "./PaginationBar.css";

const PaginationBar = ({ response, searchQuery, setNewUrl }) => {
  if (!response) {
    return null;
  } else {
    const aboutResults = searchQuery ? (
      <p>
        <span>
          Your search for <b>{searchQuery}</b> returned{" "}
          <b>{response.total_results}</b> results.
        </span>
      </p>
    ) : (
      <span>
        Pexels Curated Photos Collection
      </span>
    );
    return (
      <div className="PaginationBar">
        <Pagination
          prevOrNext={"prev"}
          setNewUrl={setNewUrl}
          pageUrl={response.prev_page}
        />
        {aboutResults}
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
