import React, { useState } from "react";
import "../styles/sports.css";
import ImageModal from "./ImageModal";

const Sports = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };

  return (
    <div className="sports-page">
      <div className="sports-hero-section">
        <h1>AAROHAN 2K25 - Sports Event</h1>
      </div>

      {/* Overview */}
      <section className="sports-overview">
        <h2>🏆 AAROHAN 2K25 - Sports Event Overview</h2>
        <p>
          The Sports Matches at Aarohan 2K25 brought out the competitive spirit and unity among students, making it
          one of the most thrilling highlights of the celebration week. With back-to-back matches, loud cheers,
          and high-energy gameplay, the event embodied strategy, teamwork, and sportsmanship.
        </p>

        <h3>🔥 High-Energy Outdoor Matches</h3>
        <ul>
          <li>🏐 <b>Volleyball Showdowns</b> – Incredible spikes and defensive masterstrokes.</li>
          <li>🏏 <b>Cricket League</b> – Tactical gameplay, sixes flying, and nerve-wracking finishes.</li>
          <li>🏀 <b>Basketball Championship</b> – Precision passes, perfect dunks, and unbeatable teamwork.</li>
        </ul>

        <h3>🎯 Strategic Indoor Battles</h3>
        <ul>
          <li>🏸 <b>Badminton Matches</b> – Lightning-fast rallies and pure technique.</li>
          <li>♟️ <b>Chess Battles</b> – Tactical mind games showcasing brilliant strategies.</li>
          <li>🎯 <b>Carrom Board Face-Off</b> – Perfect aim and concentration tested in every match.</li>
          <li>🎮 <b>BGMI Esports Tournament</b> – Virtual battlefield challenges with ultimate precision.</li>
        </ul>
      </section>

      {/* Results Section */}
      {/* Competitions & Results Section */}
      <section className="sports-results">
        <h2>🏆 Competitions & Results</h2>
        <p>The Sports Event at Aarohan 2K25 showcased **skill, teamwork, and strategy**, with intense matches across various sports.</p>

        {/* Winners Table */}
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
                <td>🏏 Cricket Boys </td>
                <td>BE</td>
                <td>Sarthak Deshmukh</td>
                <td>BE vs SE</td>
              </tr>
              <tr>
                <td>🏏 Cricket Girls </td>
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
                <td>Mayur Sonawane </td>
                <td> - </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Winner Images */}
        <h3>📸 Where Effort Met Triumph – Our Winning Squads</h3>
        <div className="winner-gallery">
          <img src="/images/Sports/Cricket.jpeg" alt="Cricket Winners - TE" />
          <img src="/images/Sports/Volleyball.jpeg" alt="Volleyball Winners - FE" />
          <img src="/images/Sports/Basketball.jpeg" alt="Basketball Winners - SE" />
          <img src="/images/Sports/VolleyballG.jpeg" alt="Badminton Winners - TE" />
          <img src="/images/Sports/CricketB.jpeg" alt="Chess Winners - FE" />
          <img src="/images/Sports/Basketball.jpeg" alt="BGMI Esports Winners - TE" />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="sports-gallery">
        <h2>Sports Gallery</h2>
        <div className="grid-container">
          {["Cricket.jpeg", "Volleyball.jpeg", "CricketB.jpeg", ".jpeg", "event5.jpeg", "event6.jpeg"].map((img, index) => (
            <div className="grid-item" key={index} onClick={() => openModal(`/images/${img}`)}>
              <img src={`/images/Sports/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      {/* Image Popup Modal */}
      <ImageModal imageSrc={selectedImage} onClose={closeModal} />

      {/* Popup Modal for Image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content">
            <img src={selectedImage} alt="Expanded View" className="modal-img" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Sports;