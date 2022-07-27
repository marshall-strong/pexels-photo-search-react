import React from "react";
import Pagination from "./Pagination";
import "./PaginationBar.css";

const PaginationBar = ({ response, setNewUrl, displayedUrl }) => {
  if (!response) {
    return null;
  } else {
    const decodedUri = decodeURI(displayedUrl);
    const curatedSubstring = decodedUri.substring(26, 33);
    console.log(curatedSubstring);
    const isCurated = (curatedSubstring === "curated");
    let querySubstring;
    if (isCurated) {
      querySubstring = "";
    } else {
      const substrings = decodedUri.split("=");
      querySubstring = substrings[3];
    }

    const resultsDescription = isCurated ? (
      <div className="resultsDescription">
        <span>
          <b>{"Pexels Curated Photos Collection"}</b> returned{" "}
          <b>{response.total_results}</b> results.
        </span>
      </div>
    ) : (
      <div className="resultsDescription">
        <span>
          Your search for <b>{querySubstring}</b> returned{" "}
          <b>{response.total_results}</b> results.
        </span>
      </div>
    );


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
        <div className="paginationText">
          {resultsDescription}
          {resultsPage}
        </div>
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
