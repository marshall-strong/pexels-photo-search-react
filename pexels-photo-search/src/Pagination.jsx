import React from "react";
import "./Pagination.css";

const Pagination = ({ direction, currentPage, nextPageUrl, prevPageUrl }) => {
  const arrows = direction === "prev" ? "<<" : ">>";
  const buttonText = (currentPage === 1 && direction === "prev") ? "xx" : arrows;
  return (
    <div className="Pagination">
      <p>Pagination</p>
      <p>{buttonText}</p>
    </div>
  );
};

export default Pagination;
