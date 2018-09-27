import React from "react";
import "./SearchResults.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const SearchResults = props => (
  <div>
    <Form>
      
      <Row>
        <Col sm={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <h5 className="card-title">Address: </h5>
            <p className="card-text">{props.formatted_address}</p>
            <p className="card-text">
              <span className="latlng">Lat: </span> {props.lat}
              <span className="latlng"> | </span>
              <span className="latlng">Lng: </span> {props.lng}
            </p>
            <Form.Label>Add a Clue</Form.Label>
            <Form.Control type="Clue" placeholder="50-acre botanical oasis in the Big O" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Add location to Challenge: </Form.Label>
            <Form.Control as="select">
              {/* Make these options challenges from the Database */}
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col >
          <Button href="#" className="btn btn-purple text-right">Add to Challenge</Button>
        </Col>
      </Row>
    </Form>
  </div>
);

export default SearchResults;
