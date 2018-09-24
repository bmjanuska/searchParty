import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = props => (
    <nav className="navbar justify-content-center navbar-light bg-purp">
      <Link className="navbar-brand" to="/">
      {/* Image is not showing up..... why not?  */}
      <img src="../../../public/icon-01.svg" alt="Search Party"/>
      </Link>
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
  
  export default Navbar;
  