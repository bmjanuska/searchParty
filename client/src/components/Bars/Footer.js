import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


export const Footer = props => (
    <nav className="navbar sticky-bottom navbar-light bg-foot">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "https://github.com/jessicahoward/searchParty" || window.location.pathname === "/dash"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  
  