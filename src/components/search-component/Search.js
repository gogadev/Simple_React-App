import React from "react";
import "./search.style.css";

const Search = ({ onSearch }) => {
  return (
    <div className="search-box">
      <input type="search" placeholder="Search Monsters" onChange={onSearch} />
    </div>
  );
};

export default Search;
