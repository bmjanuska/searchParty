import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    places: [],
    results: []
  };


  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search by Address</h1>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <SearchResults />
        </Container>
      </div>
    );
  }
}

export default Search;
