import React from "react";
import Pagination from "./Pagination";

const PaginationBar = ({ setNewUrl, response }) => {
  if (!response) {
    return null;
  } else {
    return (
      <div className="PaginationBar">
        <Pagination
          prevOrNext={"prev"}
          setNewUrl={setNewUrl}
          pageUrl={response.prev_page}
        />
        <span>Pagination</span>
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
