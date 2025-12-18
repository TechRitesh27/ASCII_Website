import React, { useState, useMemo } from "react";
import "../styles/homepage.css";
import "../styles/heroSection.css";
import ImageModal from "./ImageModal";
import CommitteeCarousel from "../components/committeeCarousel";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // All highlight images in ONE array
  const highlightImages = useMemo(
    () => [
      "/images/event1.jpeg",
      "/images/event2.jpg",
      "/images/event3.jpg",
      "/images/event4.jpeg",
      "/images/event5.jpg",
      "/images/event6.jpg",
      "/images/event7.jpg",
      "/images/event8.jpg",
      "/images/event9.jpg",
    ],
    []
  );

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  return (
    <div className="homepage">
      {/* Hero */}
      <div className="hero-section">
        <h1>ASCII - Student's Association of Computer Department</h1>
      </div>

      {/* About ASCII */}
      <section className="about-section">
        <div className="text-container1">
          <h2>About ASCII</h2>
          <p>
            <strong>ASCII</strong> (Association of Students of Computer Engineering)
            is the official student body of the{" "}
            <strong>Computer Engineering Department at PREC Loni.</strong>
          </p>
        </div>

        <div className="image-container">
          <img src="/images/ASCII.png" alt="ASCII" loading="lazy" />
        </div>
      </section>

      {/* Aarohan */}
      <section className="aarohan-section">
        <div className="image-container">
          <img src="/images/AAROHAN.png" alt="Aarohan" loading="lazy" />
        </div>

        <div className="text-container">
          <h2>AAROHAN 2K25</h2>
          <ul>
            <li>Technical Fest</li>
            <li>Sports Matches</li>
            <li>Freshers & Farewell Celebration</li>
          </ul>
        </div>
      </section>

      {/* Events */}
      <div className="EventText">
        <h2>Our EVENTS</h2>
      </div>

      <section className="event-cards">
        {["event2.jpg", "event7.jpg", "event9.jpg"].map((img, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              <img src={`/images/${img}`} alt="Event" loading="lazy" />
            </div>
          </div>
        ))}
      </section>

      {/* Highlights */}
      <section className="event-highlights">
        <h2>Aarohan 2K25 - Events Highlights</h2>

        <div className="grid-container">
          {highlightImages.map((img, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => openModal(index)}
            >
              <img src={img} alt={`Event ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 ADVANCED IMAGE MODAL */}
      {currentIndex !== null && (
        <ImageModal
          images={highlightImages}
          currentIndex={currentIndex}
          onClose={closeModal}
        />
      )}

      {/* Committee */}
      <section className="committee-section">
        <h2>Meet Our Committee</h2>
        <CommitteeCarousel />
      </section>
    </div>
  );
};

export default HomePage;
