import React, { useState, useMemo } from "react";
import "../styles/sports.css";
import "../styles/heroSection.css";
import ImageModal from "./ImageModal";

const Sports = () => {
  const CHUNK_SIZE = 8;

  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  const closeModal = () => {
    setSelectedIndex(null);
    setActiveImages([]);
  };

  // gallery images (memoized)
  const sportsImages = useMemo(
    () => [
      "b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg",
      "ba1.jpg",
      "c1.jpg", "c2.jpg", "c3.jpg",
      "v1.jpg", "v2.jpg", "v3.jpg", "v4.jpg", "v5.jpg", "v6.jpg",
      "b6.jpeg"
    ],
    []
  );

  const fullImagePaths = useMemo(
    () => sportsImages.map((img) => `/images/Sports/${img}`),
    [sportsImages]
  );

  return (
    <div className="sports-page">
      <div className="hero-section">
        <h1>AAROHAN 2K25 - Sports Event</h1>
      </div>

      {/* Overview */}
      <section className="sports-overview">
        <h2>🏆 AAROHAN 2K25 - Sports Event Overview</h2>
        <p>
          The Sports Matches at Aarohan 2K25 brought out the competitive spirit and unity among students,
          making it one of the most thrilling highlights of the celebration week.
        </p>

        <h3>🔥 High-Energy Outdoor Matches</h3>
        <ul>
          <li>🏐 <b>Volleyball Showdowns</b> – Incredible spikes and defensive masterstrokes.</li>
          <li>🏏 <b>Cricket League</b> – Tactical gameplay and nerve-wracking finishes.</li>
          <li>🏀 <b>Basketball Championship</b> – Precision passes and teamwork.</li>
        </ul>

        <h3>🎯 Strategic Indoor Battles</h3>
        <ul>
          <li>🏸 <b>Badminton Matches</b> – Lightning-fast rallies.</li>
          <li>🎮 <b>BGMI Esports Tournament</b> – Virtual battlefield challenges.</li>
        </ul>
      </section>

      {/* Results */}
      <section className="sports-results">
        <h2>🏆 Competitions & Results</h2>

        <div className="result-table">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>Winner Team</th>
                <th>Captain</th>
                <th>Final Match</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🏏 Cricket Boys</td>
                <td>BE</td>
                <td>Sarthak Deshmukh</td>
                <td>BE vs SE</td>
              </tr>
              <tr>
                <td>🏏 Cricket Girls</td>
                <td>TE</td>
                <td>Sumitra Deokar</td>
                <td>TE vs SE</td>
              </tr>
              <tr>
                <td>🏐 Volleyball Boys</td>
                <td>TE</td>
                <td>Aditya Kahandal</td>
                <td>TE vs BE</td>
              </tr>
              <tr>
                <td>🏐 Volleyball Girls</td>
                <td>SE</td>
                <td>Rutuja Dighe</td>
                <td>SE vs TE</td>
              </tr>
              <tr>
                <td>🏀 Basketball Boys</td>
                <td>BE</td>
                <td>Abhishekh Chitale</td>
                <td>TE vs BE</td>
              </tr>
              <tr>
                <td>🏸 Badminton</td>
                <td>TE</td>
                <td>Nandini Lahare</td>
                <td>SE vs TE</td>
              </tr>
              <tr>
                <td>🎮 BGMI Esports</td>
                <td>TsxSaiyan</td>
                <td>Mayur Sonawane</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Winners */}
        <h3>📸 Where Effort Met Triumph – Our Winning Squads</h3>
        <div className="winner-gallery">
          {[
            "cricketWinner.jpg",
            "crickWinner.jpg",
            "volleyballWinner.jpg",
            "volleyWinner.jpg",
            "basketWinner.jpg",
            "badmintonWinner.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={`/images/Sports/${img}`}
              alt="Winner"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Sports Gallery */}
      <section className="sports-gallery">
        <h2>Sports Gallery</h2>

        <div className="grid-container">
          {fullImagePaths.slice(0, visibleCount).map((img, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => {
                setActiveImages(fullImagePaths);
                setSelectedIndex(index);
              }}
            >
              <img src={img} alt={`Event ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {visibleCount < fullImagePaths.length && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + CHUNK_SIZE)}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Advanced Image Modal */}
      {selectedIndex !== null && (
        <ImageModal
          images={activeImages}
          currentIndex={selectedIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Sports;
