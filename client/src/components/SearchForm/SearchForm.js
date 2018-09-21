import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="place">place Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="place"
        list="places"
        type="text"
        className="form-control"
        placeholder="Type in a dog place to begin"
        id="place"
      />
      <datalist id="places">
        {props.places.map(place => <option value={place} key={place} />)}
      </datalist>
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
