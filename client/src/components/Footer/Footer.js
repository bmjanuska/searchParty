import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = props => (
    <nav className="navbar sticky-bottom justify-content-center navbar-light bg-foot">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dash"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user"
              className={
                window.location.pathname === "/user"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Accout
            </Link>
          </li>
          <li className="nav-item">
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
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Footer;
  