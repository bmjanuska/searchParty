import React from "react";
import "./SearchForm.css";
import { Row, Col } from "../Grid";

const SearchForm = props => (

  <form className="search">
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="place"
        type="text"
        className="form-control"
        placeholder="Leu Gardens"
        id="place"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-pink"
      >
        Search
      </button>
    </div>
  </form>

);

export default SearchForm;


