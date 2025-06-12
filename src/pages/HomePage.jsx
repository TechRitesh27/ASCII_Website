import React, { useState } from "react";
import "../styles/homepage.css";
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
        <div className="text-container">
          <h1>ASCII - Student's Association of Computer Department</h1>
          {/* <h3>ASCII (Association of Students of Computer Engineering) is the official student body of the Computer Engineering Department at PREC Loni. Formed with a vision to promote technical growth, creativity, and leadership among students, ASCII acts as a bridge between faculty and learners, academics and innovation.
            We organize a wide range of events including technical fests, cultural programs, social awareness drives, and fun activities to create a dynamic and collaborative campus environment.
            In the academic year 2024–25, ASCII proudly introduced AAROHAN 2K25 — a themed celebration uniting all major student-led events under one identity of energy, elegance, and evolution./
          </h3> */}
        </div>
      </div>

      {/* about ASCII  */}
      <section className="about-section">
        <div className="text-container1">
          <h2>About ASCII</h2>
          <p>ASCII (Association of Students of Computer Engineering) is the official student body of the Computer Engineering Department at PREC Loni. Formed with a vision to promote technical growth, creativity, and leadership among students, ASCII acts as a bridge between faculty and learners, academics and innovation.
            We organize a wide range of events including technical fests, cultural programs, social awareness drives, and fun activities to create a dynamic and collaborative campus environment.
            In the academic year 2024–25, ASCII proudly introduced AAROHAN 2K25 — a themed celebration uniting all major student-led events under one identity of energy, elegance, and evolution.</p>
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
          <h2>Aarohan 2K25</h2>
          <p>Aarohan 2K25 was not just an event — it was an experience. <br />
            Organized by the ASCII Committee, Aarohan 2K25 brought together energy, excitement, and expression through three major events: <br />
            <b>Technical Fest <br />
              Sports Matches <br />
              Freshers & Farewell Celebration. </b> <br />
            From tech brains to stage vibes, and cricket fever to DJ beats — every moment reflected unity, creativity, and the spirit of our department. <br />
            Aarohan means rise — and with this event, our memories, friendships, and efforts truly rose to a new level.</p>
        </div>
      </section>

      {/* Events cards  */}
      <div className="EventText">
        <h2>Our Events</h2>
      </div>
      <section className="event-cards">
        <div className="card">
          <a href="/technical-event">
            <div className="card-image">
              <img src="/images/TechEvent.jpg" alt="Technical Event" />
              <div className="overlay-text">Explore coding challenges, hackathons, and tech talks!</div>
            </div>
            <h3>Technical Event</h3>
          </a>
        </div>

        <div className="card">
          <a href="/sports">
            <div className="card-image">
              <img src="/images/Sports.jpg" alt="Sports Event" />
              <div className="overlay-text">Engage in exciting competitions and showcase your athleticism!</div>
            </div>
            <h3>Sports Event</h3>
          </a>
        </div>

        <div className="card">
          <a href="/freshers-farewell">
            <div className="card-image">
              <img src="/images/FnFParty.jpg" alt="Freshers & Farewell" />
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
          {["event1.jpeg", "event2.jpeg", "event3.jpeg", "event4.jpeg", "event5.jpeg", "event6.jpeg"].map((img, index) => (
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