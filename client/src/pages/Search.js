import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API.js";
import { Container, Row, Col } from "../components/Grid";
import { Hbar } from "../components/Bars";

class Search extends Component {
  state = {
    search: "",
    // long_name: "",
    formatted_address: "",
    lat: "",
    lng: "",
    error: "",
    clue:"",
    challenge:"", 
    searchedBox: false
  };

  madeSearch = () => {
    console.log("Look you did a search")
        this.setState({successOpen: true})
}

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
          long_name: res.data.results[0].address_components[0].long_name,
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
        <Container>
          <Row>
            <Col size="12">
              <h1>Search</h1>
            </Col>
          </Row>
      <Hbar/>
          <Row>
          <Col size="12">
            <label htmlFor="place">Address or Place</label>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            </Col>
          </Row>

          <Row>
          <Col size="12">
            <SearchResults
              handle={this.madeSearch}
              formatted_address={this.state.formatted_address}
              lat={this.state.lat}
              lng={this.state.lng}
              clue={this.state.clue}
              challenge={this.state.challenge}
            />
            </Col>
          </Row>          
        </Container>
      </div>
    );
  }
}

export default Search;

