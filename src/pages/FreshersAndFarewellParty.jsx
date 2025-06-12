import React, {useState} from "react";
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
    <div>
      <div className="PartyHeroSection">
        <h1>Freshers & Farewell Party – AAROHAN 2K25</h1>
      </div>

      <section className="PartyOverview">
        <h3>About Event</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae alias quia explicabo. Earum ipsum voluptates quae, eum dolorum distinctio exercitationem placeat. Ad hic saepe labore ipsum explicabo facilis totam!
          Itaque reiciendis voluptatum eligendi minima tempora ipsa dolores labore veniam voluptatibus ducimus. Quam libero reprehenderit similique sit exercitationem, illum nesciunt aliquid dolore magnam. Error, qui. Iure, ad! Eius, porro id.
          Autem aperiam at accusantium suscipit, ab quia. Est asperiores, cupiditate voluptatum excepturi veniam sequi hic officia reiciendis error velit sunt optio placeat culpa nulla eveniet ullam sint! Quaerat, quos officia.
          Veniam ipsam consectetur, repellendus vel ipsa sunt? Id, iusto neque ea qui dolorum quos! Voluptate, delectus illo officiis error aspernatur dignissimos nostrum iste, nulla dolorem cum sapiente commodi? Provident, natus.
          Autem, modi eligendi facilis nisi, rerum quos libero voluptatem quo culpa laborum atque eos, ducimus nulla placeat sed totam cum? Nam laborum impedit, facilis cupiditate deserunt error adipisci minima similique.</p>
      </section>

      <section className="KeyHighlights">
        <h3>Key Highlights of Event</h3>
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
        <h2>Lets Meet our Champions of Year 2024-25</h2>
        <div className="categoryGrid">
          <div className="categoryCard">
            <img src="/images/Party/SOY.jpeg" alt="Student of the year" />
            <div className="categoryCard-text">
              <h3>Student of the Year</h3>
              <p>Miss. Vedika Kharde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/AE.jpeg" alt="Academic Excellence Award" />
            <div className="categoryCard-text">
              <h3>Academic Excellence</h3>
              <p>Miss. Saiee Gulhane </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/IS.jpeg" alt="Iconic Student of the Year" />
            <div className="categoryCard-text">
              <h3>Iconic Student of Year</h3>
              <p>Miss.  </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/mrFresher.jpeg" alt="Mr. Fresher " />
            <div className="categoryCard-text">
              <h3>Mr. Fresher of Year 2024-25</h3>
              <p>Mr.  </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/msFresher.jpeg" alt="Miss Fresher" />
            <div className="categoryCard-text">
              <h3>Miss Fresher of Year 2024-25</h3>
              <p>Miss.  </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/GateTop.jpeg" alt="Gate Topper" />
            <div className="categoryCard-text">
              <h3>Gate Topper</h3>
              <p>Mr. Rohit Darkunde</p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/SEtop.jpeg" alt="SE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class SE</h3>
              <p>Miss. Vedika Kharde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/SEtop.jpeg" alt="SE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class SE</h3>
              <p>Miss. Vedika Kharde </p>
            </div>
          </div>

          <div className="categoryCard">
            <img src="/images/Party/SEtop.jpeg" alt="SE Topper" />
            <div className="categoryCard-text">
              <h3>Topper of Class SE</h3>
              <p>Miss. Vedika Kharde </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="party-event-highlights">
        <h2>Aarohan 2K25 - Events Highlights</h2>
        <div className="party-grid-container">
          {["event1.jpeg", "event2.jpeg", "event3.jpeg", "event4.jpeg", "event5.jpeg", "event6.jpeg"].map((img, index) => (
            <div className="party-grid-item" key={index} onClick={() => openModal(`/images/${img}`)}>
              <img src={`/images/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <ImageModal imageSrc={selectedImage} onClose={closeModal} />

    </div>
  );
};

export default FreshersAndFarewellParty;