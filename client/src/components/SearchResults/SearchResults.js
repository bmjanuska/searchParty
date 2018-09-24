import React from "react";
import "./SearchResults.css";


const SearchResults = props => (
    <span className="search-results">
      <hr></hr>
      {/* <p>Name: {props.long_name}</p> */}
      <p>Address: {props.formatted_address}</p>
      <p>Lat: {props.lat}</p>
      <p>Lng: {props.lng}</p>

    </span>
);

export default SearchResults;
