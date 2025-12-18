import React, { useState, useMemo } from "react";
import "../styles/technicalEvent.css";
import "../styles/heroSection.css";
import ImageModal from "./ImageModal";

const TechnicalEvent = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  const closeModal = () => {
    setSelectedIndex(null);
    setActiveImages([]);
  };

  // Gallery images (memoized)
  const galleryImages = useMemo(
    () => [
      "logoWinner.jpg", "guests.jpg", "c2.jpg", "h1.png", "h3.png",
      "s3.jpg", "l1.jpg", "l3.jpg", "l2.jpg", "yash.png",
      "p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg",
      "s2.jpg", "sBanner.jpg", "s7.jpg",
      "t2.jpg", "t3.jpg", "qna2.jpeg", "samSession.jpeg"
    ],
    []
  );

  const fullGalleryPaths = useMemo(
    () => galleryImages.map((img) => `/images/TechEvent/${img}`),
    [galleryImages]
  );

  const videos = [
    { src: "samarthVideo.mp4", title: "Keynote by Samarth Kulkarni" },
    { src: "samarthVideo1.mp4", title: "Keynote by Samarth Kulkarni - Part 2" },
    // { src: "highlights.mp4", title: "Event highlight" }
  ];

  return (
    <div className="technical-event">
      <div className="hero-section">
        <h1>AAROHAN 2K25 - Technical Event</h1>
      </div>

      {/* Event Overview */}
      <section className="event-overview">
        <h2>📢 AAROHAN 2K25 - Technical Event Overview</h2>
        <p>
          The Technical Event of Aarohan 2K25, organized by the ASCII Association
          in collaboration with PRECCON, was a landmark success with 150+
          participants.
        </p>

        <p>⚡ Day 1: Paper Presentation in association with PRECCON.</p>
        <p>🚀 Day 2: Five engaging competitions.</p>

        <ul>
          <li>💡 <b>Ideathon</b></li>
          <li>🚀 <b>Nirmiti Hackathon</b></li>
          <li>📜 <b>Poster Presentation</b></li>
          <li>🧩 <b>Logo Quiz</b></li>
          <li>🤖 <b>Technical Quiz</b></li>
        </ul>
      </section>

      {/* Competition Categories */}
      <section className="competition-categories">
        <h2>🏆 Competition Categories</h2>
        <div className="categories-grid">
          {[
            { img: "hackathon.png", title: "Nirmiti Hackathon", text: "Coding challenge with your team!" },
            { img: "posterPresentation.jpg", title: "Poster Presentation", text: "Show your art and research." },
            { img: "sQuestion.png", title: "Logo Quiz", text: "Guess logos using real-world knowledge!" },
            { img: "ideathon.jpg", title: "Ideathon", text: "Pitch your innovative ideas." },
            { img: "techQuiz.jpg", title: "Technical Quiz", text: "Test core technical knowledge." },
            { img: "qna.jpeg", title: "QnA Session", text: "Interactive doubt-solving session." }
          ].map((item, index) => (
            <div className="category-card" key={index}>
              <img src={`/images/TechEvent/${item.img}`} alt={item.title} loading="lazy" />
              <h2>{item.title}</h2>
              <div className="category-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Competition Breakdown */}
      <section className="competition-details">
        <h2>🏆 Competition Breakdown</h2>
        <div className="competition-grid">
          {/* unchanged content */}
          <div className="competition-card">
            <h3>🚀 Nirmiti Hackathon</h3>
            <p>📢 Registrations: 21</p>
            <p>🏆 Winner: Team Diamond - Anushka Katariya</p>
            <p>🥈 Runner-up: Code Veda - Nikita Shende</p>
          </div>
          <div className="competition-card">
            <h3>📜 Poster Presentation</h3>
            <p>📢 Registrations: 27</p>
            <p>🏆 Winner: Team Dynamo - Ketaki Chaudhari</p>
          </div>
          <div className="competition-card">
            <h3>💡 Ideathon</h3>
            <p>📢 Registrations: 30</p>
            <p>🏆 Winner: Ammara Patel</p>
          </div>
          <div className="competition-card">
            <h3>💡 Logo Quiz</h3>
            <p>📢 Registrations: 32</p>
            <p>🏆 Winner: Shubham Jadhav</p>
          </div>
          <div className="competition-card">
            <h3>💡 Technical Quiz</h3>
            <p>📢 Registrations: 43</p>
            <p>🏆 Winner: Juili Chaudhari</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="event-gallery">
        <h2>Technical Event - Highlights</h2>
        <div className="grid-container">
          {fullGalleryPaths.map((img, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => {
                setActiveImages(fullGalleryPaths);
                setSelectedIndex(index);
              }}
            >
              <img src={img} alt={`Event ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Image Modal */}
      {selectedIndex !== null && (
        <ImageModal
          images={activeImages}
          currentIndex={selectedIndex}
          onClose={closeModal}
        />
      )}

      {/* Videos */}
      <section className="event-videos">
        <h2>🎬 Watch the Event Recap</h2>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-item">
              <h4>{video.title}</h4>
              <video controls preload="metadata">
                <source src={`/videos/${video.src}`} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalEvent;
