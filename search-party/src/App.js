import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Container from "./components/Container";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Container>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/user" component={User} />
      </Container>
      <Footer />
    </div>
  </Router>
);

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
