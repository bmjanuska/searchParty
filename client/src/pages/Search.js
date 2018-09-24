import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Alert from "../components/Alert";
import API from "../utils/API.js";

class Search extends Component {
  state = {
    search: "",
    formatted_address: "",
    lat: "",
    lng: "",
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I have been clicked");
    API.getPlace(this.state.search)
      .then(res => {
        //need to handle the type to make spaces into + 
        console.log("What I searched is: " + res.data.results[0].formatted_address);
        console.log(res);
        console.log("some results" + res.data.status);

        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          formatted_address: res.data.results[0].formatted_address,
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        });

        console.log("some results" + this.state.formatted_address);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, }}
          >
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />

          <SearchResults
            formatted_address={this.state.formatted_address}
            lat={this.state.lat}
            lng={this.state.lng}
          />
  
        </Container>
      </div>
    );
  }
}

export default Search;

