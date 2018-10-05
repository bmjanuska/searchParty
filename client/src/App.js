import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { TopNavbar, Footer } from "./components/Bars";
import Challenge from "./pages/Challenge";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import axios from "axios";


class App extends Component {


  state ={
    challenges: [], 
    username: "",
    password: ""
  }

  componentDidMount(){
    // Get info from API
    axios.get("/api/challenges")
    .then(res => {
        this.setState({
            challenges: res.data,
        })
        console.log(res);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <TopNavbar />
          <Route exact path="/" component={Home} challenges={this.state.challenges}/>
          <Route exact path="/challenge" render={ () => <Challenge challenges={this.state.challenges} /> }/>
          <Route exact path="/user" component={User} />
          <Route exact path="/search" component={Search} challenges={this.state.challenges}/>
          <Route exact path="/signup" render={ (props) => <Signup {...props}/> } />
          <Route exact path="/login" component={Login} />
          <Footer />
        </div>
      </Router>
    )
  }
};

export default App;


