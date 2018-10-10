import React from "react";
import "./SearchForm.css";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchForm = props => (
    <Row>
      {/* Search Input */}
      <Col sm={8}>
      <form className="search">
          <Form.Group>
            <Form.Label>Address or Place</Form.Label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="place"
              type="text"
              className="form-control"
              placeholder="Leu Gardens"
              id="place"
            />
          </Form.Group>
        </form>
      </Col>
      <Col sm={4}>

        <Button
          className="btn btn-pink"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Search
          </Button>
      </Col>
    </Row>
);

export default SearchForm;


