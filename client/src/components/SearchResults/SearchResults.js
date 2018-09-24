import React from "react";
import "./SearchResults.css";
import Row from "../Row"


const SearchResults = props => (
  <Row className="search-results">
  <hr></hr>
      {/* <p>Name: {props.long_name}</p> */}
      <p>Address: {props.formatted_address}</p>
      <p>Lat: {props.lat}</p>
      <p>Lng: {props.lng}</p>
    
  </Row>



);

export default SearchResults;
