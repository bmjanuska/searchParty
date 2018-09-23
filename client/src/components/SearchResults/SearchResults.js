import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="search-results">
      <li className="list-group-item" >
        {/* {props.results.map(result =>
          <h1 key={result}>{this.address_components}</h1>,
          // <p>{this.geometry.location}</p>
          )} */}
      </li>
  </ul>
);

export default SearchResults;
