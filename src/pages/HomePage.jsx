import React from "react";
import "../styles/homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header>
        <h1>ASCII - Student's Association of Computer Department</h1>
      </header>

      {/* Introduction Section */}
      <section className="intro">
        <p>Welcome to ASCII! Our goal is to foster innovation, teamwork, and learning.</p>
      </section>

      {/* Event Section */}
      <section className="event">
        <h2>Aarohan 2K25</h2>
        <p>Join us for an unforgettable experience with technical events, sports, and fun activities.</p>
      </section>

      {/* Committee Members */}
      <section className="committee">
        <h2>Our Committee</h2>
        <ul>
          <li>President: XYZ</li>
          <li>Vice President: ABC</li>
          <li>Secretary: DEF</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 ASCII - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;