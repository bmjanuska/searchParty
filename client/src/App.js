import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Dash from "./pages/Dash";
import User from "./pages/User";

const App = () => (
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={Dash} />
    <Route exact path="/user" component={User} />
    </div>
    </Router>
);

export default App;


