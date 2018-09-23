import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import API from "../utils/API.js"; 

class Search extends Component {
  state = {
    search: "",
    places: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getPlace()
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  handleFormSubmit = event => {
    event.preventDefault(); 
    API.getPlace(this.state.search)
      .then(res => {
        if(res.data.status === "error") {
          throw new Error(res.data.message); 
        }
        this.setState({results: res.data.message}); 
      })
      .catch(err => this.setState({error: err.message}));
  };

  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search by Address</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0,  }}
            >
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results}/>
        </Container>
      </div>
    );
  }
}

export default Search;
