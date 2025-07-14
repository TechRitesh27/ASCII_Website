import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Make the logo clickable to redirect to home */}
        <NavLink to="/">
          <img src="/images/ASCII.png" alt="ASCII Logo" />
        </NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/technical-event" 
            className={location.pathname === "/technical-event" ? "active-link" : ""}
          >
            Technical Event
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sports" 
            className={location.pathname === "/sports" ? "active-link" : ""}
          >
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/freshers-farewell" 
            className={location.pathname === "/freshers-farewell" ? "active-link" : ""}
          >
            Freshers & Farewell
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;