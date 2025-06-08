import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/technical-event">Technical Event</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/freshers-farewell">Freshers & Farewell Party</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;