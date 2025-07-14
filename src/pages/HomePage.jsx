import React, { useState } from "react";
import "../styles/homepage.css";
import "../styles/heroSection.css"
import ImageModal from "./ImageModal";
import CommitteeCarousel from "../components/committeeCarousel"


const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="homepage">
      {/* Background Image */}
      <div className="hero-section">
        <h1>ASCII - Student's Association of Computer Department</h1>
      </div>

      {/* about ASCII  */}
      <section className="about-section">
        <div className="text-container1">
          <h2>About ASCII</h2>
          <p> <strong>ASCII</strong> (Association of Students of Computer Engineering) is the official student body of the <strong>Computer Engineering Department at PREC Loni. </strong> Formed with a vision to promote technical growth, creativity, and leadership among students, ASCII acts as a bridge between faculty and learners, academics and innovation.
            We organize a wide range of events including technical fests, cultural programs, social awareness drives, and fun activities to create a dynamic and collaborative campus environment.
            In the academic year 2024–25, ASCII proudly introduced <strong>AAROHAN 2K25 </strong> — a themed celebration uniting all major student-led events under one identity of energy, elegance, and evolution.</p>
        </div>

        <div className="image-container">
          <img src="/images/ASCII.png" alt="ASCII Team" />
        </div>
      </section>

      {/* about aarohan 2k25  */}
      <section className="aarohan-section">
        <div className="image-container">
          <img src="/images/AAROHAN.png" alt="Aarohan Event" />
        </div>

        <div className="text-container">
          <h2>AAROHAN 2K25</h2>
          <p>AAROHAN 2K25 was not just an event — it was an experience. <br />
            Organized by the ASCII Committee, AAROHAN 2K25 brought together energy, excitement, and expression through three major events: <br />
            <ul>
              <li>Technical Fest</li>
              <li>Sports Matches</li>
              <li>Freshers & Farewell Celebration.</li>
            </ul>
            From tech brains to stage vibes, and cricket fever to DJ beats — every moment reflected unity, creativity, and the spirit of our department. <br />
            Aarohan means rise — and with this event, our memories, friendships, and efforts truly rose to a new level.</p>
        </div>
      </section>

      {/* Events cards  */}
      <div className="EventText">
        <h2>Our EVENTS </h2>
      </div>
      <section className="event-cards">
        <div className="card">
          <a href="/technical-event">
            <div className="card-image">
              <img src="/images/event2.jpg" alt="Technical Event" />
              <div className="overlay-text">Explore coding challenges, hackathons, and tech talks!</div>
            </div>
            <h3>Technical Event</h3>
          </a>
        </div>

        <div className="card">
          <a href="/sports">
            <div className="card-image">
              <img src="/images/event7.jpg" alt="Sports Event" />
              <div className="overlay-text">Engage in exciting competitions and showcase your athleticism!</div>
            </div>
            <h3>Sports Event</h3>
          </a>
        </div>

        <div className="card">
          <a href="/freshers-farewell">
            <div className="card-image">
              <img src="/images/event9.jpg" alt="Freshers & Farewell" />
              <div className="overlay-text">Celebrate fresh beginnings and memorable farewells.</div>
            </div>
            <h3>Freshers & Farewell Party</h3>
          </a>
        </div>
      </section>

      {/* Events Highlights Section with Grid Layout */}
      <section className="event-highlights">
        <h2>Aarohan 2K25 - Events Highlights</h2>
        <div className="grid-container">
          {["event1.jpeg", "event2.jpg", "event3.jpg", "event4.jpeg", "event5.jpg", "event6.jpg", "event7.jpg", "event8.jpg", "event9.jpg"].map((img, index) => (
            <div className="grid-item" key={index} onClick={() => openModal(`/images/${img}`)}>
              <img src={`/images/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      {/* Image Popup Modal */}
      <ImageModal imageSrc={selectedImage} onClose={closeModal} />

      {/* committee members  */}

      <section className="committee-section">
        <h2>Meet Our Committee</h2>
        <CommitteeCarousel />
      </section>
    </div>
  );
};

export default HomePage; 