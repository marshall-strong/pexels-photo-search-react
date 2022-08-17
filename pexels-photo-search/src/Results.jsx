import React from "react";
import "./Results.css";

const Results = ({ response, displayedUrl }) => {
  if (!response) {
    return null;
  } else {
    const decodedUri = decodeURI(displayedUrl);
    const curatedSubstring = decodedUri.substring(26, 33);
    const isCurated = curatedSubstring === "curated";
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

    return (
      <div className="Results">
        <div className="resultsText">{resultsDescription}</div>
      </div>
    );
  }
};

export default Results;
