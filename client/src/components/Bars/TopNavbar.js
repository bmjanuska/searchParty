import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Navigation 
// ===========================================================================
export const TopNavbar = props => (
  <Navbar className="bg-purp" expand="lg">
    <Navbar.Brand href="/">
      <img src="../images/icon-01.svg" alt="Search Party" style={{ width: 40 }} />
      Search Party
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <Link
          
            to="/"
            className={
              window.location.pathname === "/home" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
        
        </Link>

        <Link
        
            to="/challenge"
            className={
              window.location.pathname === "/challenge" || window.location.pathname === "/challenge"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Challenge
        
        </Link>

        <Link
            to="/user"
            className={
              window.location.pathname === "/user"
                ? "nav-link active"
                : "nav-link"
            }
          >
            My Account
          
        </Link>

        <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          
        </Link>

        <Link
        
            to="/login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Logout
          
        </Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>

);


