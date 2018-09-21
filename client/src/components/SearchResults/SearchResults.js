import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(place => (
      <li key={place} className="list-group-item">
        <p src={place}></p>
      </li>
    ))}
  </ul>
);

export default SearchResults;
