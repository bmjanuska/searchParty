import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="search-results">
      <li className="list-group-item" >
      <p>test: {props.search}</p>
      <p>Location: {props.address_compnent}</p>
      <p>Address: {props.formatted_address}</p>
      <p>Lat: {props.lat}</p>
      <p>Lng: {props.lng}</p>
      </li>
  </ul>
);

export default SearchResults;
