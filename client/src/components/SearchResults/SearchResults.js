import React from "react";
import "./SearchResults.css";
import { Row, Col } from "../Grid";


const SearchResults = props => (
  <div>
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
