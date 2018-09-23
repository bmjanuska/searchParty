import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="search-results">
      <li className="list-group-item">
        <p>{props.results}</p>
      </li>
  </ul>
);

export default SearchResults;
