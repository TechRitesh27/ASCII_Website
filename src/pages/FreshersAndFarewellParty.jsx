import React, { useState, useMemo } from "react";
import "../styles/FreshersAndFarewellParty.css";
import ImageModal from "./ImageModal";

const FreshersAndFarewellParty = () => {
  const CHUNK_SIZE = 12;

  const [visibleCounts, setVisibleCounts] = useState({
    highlights: CHUNK_SIZE,
    faces: CHUNK_SIZE,
    memories: CHUNK_SIZE,
  });

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  const closeModal = () => {
    setSelectedIndex(null);
    setActiveImages([]);
  };

  /* Image lists */
  const eventHighlights = useMemo(
    () => [
      "stage2.jpg", "stage3.jpg", "stage4.jpg", "stage5.jpg", "stage6.JPG",
      "activity1.jpg", "activity3.jpg", "activity4.jpg", "activity5.JPG",
      "activity6.jpg", "activity8.jpg", "cap_throwing.JPG", "be_food3.JPG"
    ],
    []
  );

  const enjoyingFaces = useMemo(
    () => [
      "dance2.JPG", "dance3.JPG", "dance4.JPG", "dance5.JPG",
      "dance6.JPG", "dance7.JPG", "dance8.JPG", "dance9.JPG", "dance10.JPG"
    ],
    []
  );

  const memories = useMemo(
    () => [
      "be1.JPG", "be2.JPG", "be3.JPG", "be4.JPG", "be5.JPG", "be6.JPG",
      "be7.JPG", "be8.JPG", "be9.JPG", "be10.JPG", "be11.JPG", "be12.JPG",
      "be13.jpg", "be_food.JPG", "be_food2.JPG",
      "te1.JPG", "te2.JPG", "te3.JPG", "te4.JPG", "te6.JPG", "te7.JPG",
      "te8.JPG", "te9.jpg",
      "se1.jpg", "se2.jpg",
      "fe1.JPG", "fe2.jpg", "fe3.jpg", "fe4.jpg",
      "stud1.JPG", "stud2.JPG", "stud3.JPG", "stud4.JPG", "stud5.JPG",
      "stud6.JPG", "stud7.JPG", "stud8.JPG", "stud9.JPG", "stud10.JPG",
      "stud11.jpg", "stud12.jpg", "stud13.jpg"
    ],
    []
  );

  /* Reusable gallery renderer */
  const renderGallery = (images, key) => {
    const fullPaths = images.map(
      (img) => `/images/party_fresher/${img}`
    );

    return (
      <>
        <div className="party-grid-container">
          {fullPaths.slice(0, visibleCounts[key]).map((img, index) => (
            <div
              className="party-grid-item"
              key={`${key}-${index}`}
              onClick={() => {
                setActiveImages(fullPaths);
                setSelectedIndex(index);
              }}
            >
              <img src={img} alt={`Event ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {visibleCounts[key] < images.length && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() =>
                setVisibleCounts((prev) => ({
                  ...prev,
                  [key]: prev[key] + CHUNK_SIZE,
                }))
              }
            >
              Load More
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="FF-party">
      <div className="hero-section">
        <h1>AAROHAN 2K25 - Freshers & Farewell Party</h1>
      </div>

      <section className="PartyOverview">
        <h2>About Event</h2>
        <p>
          Aarohan 2K25 – Freshers & Farewell Party wasn’t just the best of the year —
          it was a celebration that set a new benchmark. Entirely planned and
          executed by the ASCII committee, it created memories for life.
        </p>
      </section>

      <section className="KeyHighlights">
        <h2>Key Highlights of Event</h2>
        <ul>
          <li>Mr. & Miss Freshers</li>
          <li>Student of the Year</li>
          <li>Academic Excellence</li>
          <li>Iconic Student</li>
          <li>Dance Performances</li>
          <li>DJ Night & Special Dinner</li>
        </ul>
      </section>

      <section className="party-event-highlights">
        <h2>Aarohan 2K25 - Event Highlights</h2>
        {renderGallery(eventHighlights, "highlights")}
      </section>

      <section className="party-event-highlights">
        <h2>Enjoying Faces</h2>
        {renderGallery(enjoyingFaces, "faces")}
      </section>

      <section className="party-event-highlights">
        <h2>Some Memories</h2>
        {renderGallery(memories, "memories")}
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

export default FreshersAndFarewellParty;
