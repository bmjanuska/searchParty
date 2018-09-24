import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Dash from "./pages/Dash";
import User from "./pages/User";
import Search from "./pages/Search";
import Footer from "./components/Footer"

import Signup from "./pages/Signup";
import Login from "./pages/Login"



const App = () => (
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={Dash} />
    <Route exact path="/user" component={User} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Footer />
    </div>
    </Router>
);

export default App;


