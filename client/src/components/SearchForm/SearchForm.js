import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="place">Address or Place</label>
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
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;


// WE NEED THIS TO BE PUT IN THE RIGHT PLACE FOR API SEARCH
// .replace(/ /g,"+")