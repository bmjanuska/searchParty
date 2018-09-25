import React from "react";
import "./SearchResults.css";
import { Row, Col } from "../Grid";


const SearchResults = props => (
  <div>
    <hr></hr>
    <span className="search-results card">
      <div className="card-body">
        <Row>
          <Col size="sm-12 md-9">
            <h5 className="card-title">Address: </h5>
            <p className="card-text">{props.formatted_address}</p>

            <h5 className="card-title">Lat: </h5>
            <p className="card-text">{props.lat}</p>

            <h5 className="card-title">Lng: </h5>
            <p className="card-text">{props.lng}</p>
            <br></br>
          </Col>
          <Col size="sm-12 md-3">
            <button href="#" className="btn btn-purple text-right">Add to Challenge</button>
          </Col>
        </Row>
      </div>
    </span>
  </div>
);

export default SearchResults;


{/* <span className="search-results card">
<div className="card-body">
<h5>Address: {props.formatted_address}</h5>
<h5>Lat: {props.lat}</h5>
<h5>Lng: {props.lng}</h5>
<a href="#" class="btn btn-purple">Add to a Challenge</a>
</div>
</span> */}


{/* <Row>
  <Col size="md-8">
    <span><h5>Address:</h5> {props.formatted_address}</span>
    <span><h5>Lat:</h5> {props.lat}</span>
    <span><h5>Lng:</h5> {props.lng}</span>
  </Col>
  <Col size="md-4">
    <a href="#" class="btn btn-purple">Add to a Challenge</a>
  </Col>
</Row> */}