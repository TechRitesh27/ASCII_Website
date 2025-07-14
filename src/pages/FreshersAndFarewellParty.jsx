import React, { useState } from "react";
import "../styles/FreshersAndFarewellParty.css"
import ImageModal from "./ImageModal";
const FreshersAndFarewellParty = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="FF-party">
      <div className="hero-section">
        <h1>AAROHAN 2K25 - Freshers & Farewell Party</h1>
      </div>

      <section className="PartyOverview">
        <h2>About Event</h2>
        <p>Aarohan 2K25 – Freshers & Farewell Party wasn’t just the best of the year — it was a celebration that set a new benchmark. Unlike any party before, this event stood out for its vibrant vibe, heartfelt moments, and flawless execution.
          From grand welcomes to emotional farewells, every moment was crafted with passion and purpose. The energy on the stage, the elegance on the ramp, and the beats on the dance floor — everything came together to create a magical experience.
          What made it truly special? It was entirely planned, managed, and executed by the ASCII committee — from concept to cake, every detail was handled with dedication. With unmatched coordination and pure heart, the team delivered a night that will be remembered as the most successful and unique party ever hosted in our department.
          It wasn’t just an event. It was ASCII’s pride, and a memory for life.</p>
      </section>

      <section className="KeyHighlights">
        <h2>Key Highlights of Event</h2>
        <ul>
          <li>Mr. & Miss Freshers</li>
          <li>Student of the Year</li>
          <li>Academic Excellence</li>
          <li>Iconic Student</li>
          <li>Dance Performance</li>
          <li>Photo Booths</li>
          <li>DJ Night</li>
          <li>Prize Distribution</li>
          <li>Special Dinner</li>
          <li>Exciting Fishponds</li>
        </ul>
      </section>

      {/* Winners prizes */}
      <section className="champions">
        <h2>Our Champions of Year 2024-25</h2>
        <div className="categoryGrid">
          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/studentOfYear.jpg" alt="Student of the year" />
            <div className="categoryCard-text">
              <h3>Student of the Year</h3>
              <p>Miss. Vedika Kharde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/AcademicExcellence.JPG" alt="Academic Excellence Award" />
            <div className="categoryCard-text">
              <h3>Academic Excellence</h3>
              <p>Miss. Saiee Gulhane </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/IconicStudent.JPG" alt="Iconic Student of the Year" />
            <div className="categoryCard-text">
              <h3>Iconic Student of Year</h3>
              <p>Miss. Komal Gadekar</p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/MrFresher.jpg" alt="Mr. Fresher " />
            <div className="categoryCard-text">
              <h3>Mr. Fresher</h3>
              <p>Mr. Yash Shinde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/MissFresher.jpg" alt="Miss Fresher" />
            <div className="categoryCard-text">
              <h3>Miss Fresher</h3>
              <p>Miss. Sakshi Harde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/gateTopper.jpg" alt="Gate Topper" />
            <div className="categoryCard-text">
              <h3>Gate Topper</h3>
              <p>Mr. Rohit Darkunde</p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/feTopper.JPG" alt="FE Topper" />
            <div className="categoryCard-text">
              <h3>CET Topper</h3>
              <p>Miss. Shraddha Bhosale </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/seTopper.jpg" alt="SE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class SE</h3>
              <p>Miss. Sakshi Nibe</p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/teTopper.JPG" alt="TE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class TE</h3>
              <p>Miss. Juili Chaudhari </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/party_fresher/Winners/beTopper.JPG" alt="BE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class BE</h3>
              <p>Miss. Saiee Gulhane </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="party-event-highlights">
        <h2>Aarohan 2K25 - Events Highlights</h2>
        <div className="party-grid-container">
          {["stage2.jpg", "stage3.jpg", "stage4.jpg", "stage5.jpg", "stage6.JPG", "activity1.jpg", "activity3.jpg", "activity4.jpg", "activity5.JPG", "activity6.jpg", "activity8.jpg", "cap_throwing.JPG", "be_food3.JPG"].map((img, index) => (
            <div className="party-grid-item" key={index} onClick={() => openModal(`/images/party_fresher/${img}`)}>
              <img src={`/images/party_fresher/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="party-event-highlights">
        <h2>Enjoying Faces</h2>
        <div className="party-grid-container">
          {["dance2.JPG", "dance3.JPG", "dance4.JPG", "dance5.JPG", "dance6.JPG", "dance7.JPG", "dance8.JPG", "dance9.JPG", "dance10.JPG"].map((img, index) => (
            <div className="party-grid-item" key={index} onClick={() => openModal(`/images/party_fresher/${img}`)}>
              <img src={`/images/party_fresher/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="party-event-highlights">
        <h2>Some Memories</h2>
        <div className="party-grid-container">
          {["be1.JPG", "be2.JPG", "be3.JPG", "be4.JPG", "be5.JPG", "be6.JPG", "be7.JPG", "be8.JPG", "be9.JPG", "be10.JPG", "be11.JPG", "be12.JPG", "be13.jpg", "be_food.JPG", "be_food2.JPG", "te1.JPG", "te2.JPG", "te3.JPG", "te4.JPG", "te6.JPG", "te7.JPG", "te8.JPG", "te9.jpg", "se1.jpg", "se2.jpg", "fe1.JPG", "fe2.jpg", "fe3.jpg", "fe4.jpg", "stud1.JPG", "stud2.JPG", "stud3.JPG", "stud4.JPG", "stud5.JPG", "stud6.JPG", "stud7.JPG", "stud8.JPG", "stud9.JPG", "stud10.JPG", "stud11.jpg", "stud12.jpg", "stud13.jpg"].map((img, index) => (
            <div className="party-grid-item" key={index} onClick={() => openModal(`/images/party_fresher/${img}`)}>
              <img src={`/images/party_fresher/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <ImageModal imageSrc={selectedImage} onClose={closeModal} />

    </div>
  );
};

export default FreshersAndFarewellParty;