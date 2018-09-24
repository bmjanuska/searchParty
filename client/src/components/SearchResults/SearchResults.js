import React from "react";
import "./SearchResults.css";


const SearchResults = props => (
    <span className="search-results">
      <hr></hr>
      {/* <p>Name: {props.long_name}</p> */}
      <h4>Address: {props.formatted_address}</h4>
      <h4>Lat: {props.lat}</h4>
      <h4>Lng: {props.lng}</h4>
      {/* button to add to your challenge */}
    </span>
);

export default SearchResults;
