import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { TopNavbar, Footer } from "./components/Bars";
import Challenge from "./pages/Challenge";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login"

const App = () => (
  <Router>
    <div>
    <TopNavbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/challenge" component={Challenge} />
    <Route exact path="/user" component={User} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Footer />
    </div>
    </Router>
);

export default App;


