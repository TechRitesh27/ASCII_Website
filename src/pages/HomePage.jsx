import React from "react";
import "../styles/homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Background Image */}
      <div className="hero-section">
        <div className="text-container">
          <h1>ASCII - Student's Association of Computer Department</h1>
          <h3>ASCII (Association of Students of Computer Engineering) is the official student body of the Computer Engineering Department at PREC Loni. Formed with a vision to promote technical growth, creativity, and leadership among students, ASCII acts as a bridge between faculty and learners, academics and innovation.
            We organize a wide range of events including technical fests, cultural programs, social awareness drives, and fun activities to create a dynamic and collaborative campus environment.
            In the academic year 2024–25, ASCII proudly introduced AAROHAN 2K25 — a themed celebration uniting all major student-led events under one identity of energy, elegance, and evolution.</h3>
        </div>
      </div>

      {/* Event Highlights Section with Grid Layout */}
      <section className="event-highlights">
        <h2>Aarohan 2K25 - Event Highlights</h2>
        <div className="grid-container">
          <div className="grid-item"><img src="/images/event1.jpeg" alt="Event 1" /></div>
          <div className="grid-item"><img src="/images/event2.jpeg" alt="Event 2" /></div>
          <div className="grid-item"><img src="/images/event3.jpeg" alt="Event 3" /></div>
          <div className="grid-item"><img src="/images/event4.jpeg" alt="Event 4" /></div>
          <div className="grid-item"><img src="/images/event5.jpeg" alt="Event 5" /></div>
          <div className="grid-item"><img src="/images/event6.jpeg" alt="Event 6" /></div>
        </div>
      </section>

      {/* Empty Boxes to be Filled with Images */}
      <section className="additional-images">
        <h2>Memorable Moments</h2>
        <div className="grid-container">
          <div className="grid-item"><img src="/images/moment1.jpg" alt="Moment 1" /></div>
          <div className="grid-item"><img src="/images/moment2.jpg" alt="Moment 2" /></div>
          <div className="grid-item"><img src="/images/moment3.jpg" alt="Moment 3" /></div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 ASCII - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;