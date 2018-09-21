import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {

  };

  componentDidMount() {
   
  }


  // Geocode.fromAddress("Eiffel Tower").then(
  //   response => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        </Container>
      </div>
    );
  }
}

export default Search;
