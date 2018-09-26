import React from "react";
import "./SearchResults.css";
import { Row, Col } from "../Grid";


const SearchResults = props => (

  <div>
    <span className="search-results card">
      <div className="card-body">
        <Row>
          <Col size="12">
            {/* address  */}
            <h5 className="card-title">Address: </h5>
            <p className="card-text">{props.formatted_address}</p>
            {/* latlng  */}
            <p className="card-text">
              <span className="latlng">Lat: </span> {props.lat}
              <span className="latlng"> | </span>
              <span className="latlng">Lng: </span> {props.lng}
            </p>
            {/* clue */}
            <label htmlFor="clue">Clue</label>
            <input
              // Send this to database as a Clue
              name="clue"
              type="text"
              className="form-control"
              placeholder="Add Clue a Here"
              id="clue"
            />
            <br></br>
            {/* challenge */}
            <label htmlFor="challenge">Challenge</label>
            <input
              // Send this to database as a Clue
              name="challenge"
              type="text"
              className="form-control"
              placeholder="Add to this challenge"
              id="challenge"
            />


            <br></br>
            <button href="#" className="btn btn-purple text-right">Add to Challenge</button>

          </Col>

        </Row>
      </div>
    </span>
  </div>
);

export default SearchResults;
