import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left side */}
      <div className="logo-container">
        <img src="/images/ASCII1.png" alt="ASCII Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/technical-event">Technical Event</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/freshers-farewell">Freshers & Farewell Party</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;