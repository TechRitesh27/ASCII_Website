import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/images/ASCII.png" alt="ASCII Logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/technical-event"
            className={location.pathname === "/technical-event" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Technical Event
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sports"
            className={location.pathname === "/sports" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Sports
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/freshers-farewell"
            className={location.pathname === "/freshers-farewell" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Freshers & Farewell
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
