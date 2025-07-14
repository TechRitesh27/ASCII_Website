import React, { useState } from "react";
import "../styles/technicalEvent.css";
import "../styles/heroSection.css"
import ImageModal from "./ImageModal";

const TechnicalEvent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const videos = [
    { src: "samarthVideo.mp4", title: "Keynote by Samarth Kulkarni" },
    { src: "samarthVideo1.mp4", title: "Keynote by Samarth Kulkarni - Part 2" },
    { src: "highlights.mp4", title: "Event highlight" }
  ];

  return (
    <div className="technical-event">
      <div className="hero-section">
        <h1>AAROHAN 2K25 - Technical Event</h1>
      </div>

      {/* About Technical Event Section */}
      {/* Event Overview */}
      <section className="event-overview">
        <h2>📢 AAROHAN 2K25 - Technical Event Overview</h2>
        <p>
          The Technical Event of Aarohan 2K25, organized by the ASCII Association in collaboration with PRECCON,
          was a landmark success held on April 11 & 12, 2025, featuring over 150 enthusiastic participants competing
          in logic, creativity, and innovation.
        </p>

        <p>⚡ Day 1: Paper Presentation in association with PRECCON, showcasing research ideas.</p>
        <p>🚀 Day 2: Five engaging competitions:</p>

        <ul>
          <li>💡 <b>Ideathon</b> – Innovation-based idea pitching</li>
          <li>🚀 <b>Nirmiti Hackathon</b> – The highlight event, building live projects</li>
          <li>📜 <b>Poster Presentation</b> – Research-backed creative visual displays</li>
          <li>🧩 <b>Logo Quiz</b> – Knowledge-based brand guessing competition</li>
          <li>🤖 <b>Technical Quiz</b> – Problem-solving challenges in core technologies</li>
        </ul>

        <p>
          🎙️ Chief Guest - Mr. Samarth Kulkarni delivered an insightful keynote speech, motivating students on industry
          trends. His interactive Q&A session allowed participants to ask questions about careers and technological advancements.
        </p>
      </section>


      <section className="competition-categories">
        <h2>🏆 Competition Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img src="/images/TechEvent/hackathon.png" alt="Nirmiti Hackathon" />
            <h2>Nirmiti Hackathon</h2>
            <div className="category-text">Coding challenge with your team! Make your product and showcase it.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/posterPresentation.jpg" alt="Poster Presentation" />
            <h2>Poster Presentation</h2>
            <div className="category-text">Show your art and explain the world.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/sQuestion.png" alt="Logo Quiz" />
            <h2>Logo Quiz</h2>
            <div className="category-text">Test your real-world knowledge by guessing logos!</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/ideathon.jpg" alt="Ideathon" />
            <h2>Ideathon</h2>
            <div className="category-text">The starting phase of every project (Idea) - Let's explain your Ideas to us.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/techQuiz.jpg" alt="Technical Quiz" />
            <h2>Technical Quiz</h2>
            <div className="category-text">Technical knowledge check for Technical Students!!!</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/qna.jpeg" alt="Samarth QnA Session" />
            <h2>QnA Session</h2>
            <div className="category-text">Let's make your doubt solved. The doubt session with chief guest Samarth Kulkarni.</div>
          </div>

        </div>
      </section>

      <section className="competition-details">
        <h2>🏆 Competition Breakdown</h2>
        <div className="competition-grid">
          <div className="competition-card">
            <h3>🚀 Nirmiti Hackathon</h3>
            <p>📢 Registrations: 21</p>
            <p>🏆 Winner: Team Diamond - Anushka Katariya</p>
            <p>🥈 Runner-up: Code Veda - Nikita Shende</p>
            <p>🎖 Consolation 1: Robo-Rath - Tejal Morankar</p>
            <p>🎖 Consolation 2: Bot Buster - Sanskar Tambe</p>
          </div>

          <div className="competition-card">
            <h3>📜 Poster Presentation</h3>
            <p>📢 Registrations: 27</p>
            <p>🏆 Winner: Team Dynamo - Ketaki Chaudhari</p>
            <p>🥈 Runner-up: Solo - Mehetre Nilesh</p>
            <p>🎖 Consolation: Team Sprax - Kharde Rushali</p>
          </div>

          <div className="competition-card">
            <h3>💡 Ideathon</h3>
            <p>📢 Registrations: 30</p>
            <p>🏆 Winner: Solo - Ammara Patel </p>
            <p>🥈 Runner-up: Team Devs - Yash Dudhat</p>
          </div>

          <div className="competition-card">
            <h3>💡 Logo Quiz</h3>
            <p>📢 Registrations: 32</p>
            <p>🏆 Winner: Shubham Jadhav</p>
            <p>🥈 Runner-up: Akanksha Ghule</p>
          </div>

          <div className="competition-card">
            <h3>💡 Technical Quiz</h3>
            <p>📢 Registrations: 43</p>
            <p>🏆 Winner: Juili Chaudhari</p>
            <p>🥈 Runner-up: FE</p>
          </div>
        </div>
      </section>

      {/* Chief Guest Samarth */}
      <section className="chief-guest">
        <h2>🎙️ Chief Guest - Samarth Kulkarni</h2>
        <div className="guest-content">
          <img src="/images/TechEvent/samarth.jpg" alt="Samarth Kulkarni" className="guest-img" />
          <div className="guest-text">
            <p>
              We were honored to welcome <strong>Samarth Kulkarni</strong> at AAROHAN 2K25, where he shared valuable insights on
              <strong> innovation, career growth, and emerging technologies</strong>. His keynote speech inspired students to
              embrace real-world challenges and industry advancements.
            </p>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="qa-section">
          <h3>💬 Q&A Highlights</h3>
          <div className="qa-item">
            <p><strong>Student:</strong> "What’s the best way to prepare for careers in AI?"</p>
            <p><strong>Samarth:</strong> "Gain hands-on experience—build projects and participate in hackathons!"</p>
          </div>
          <div className="qa-item">
            <p><strong>Student:</strong> "What’s the biggest tech trend for the future?"</p>
            <p><strong>Samarth:</strong> "AI and automation will revolutionize industries—adaptability is key!"</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="event-gallery">
        <h2>Technical Event - Highlights</h2>
        <div className="grid-container">
          {["logoWinner.jpg", "guests.jpg", "c2.jpg", "h1.png","h3.png", "s3.jpg", "l1.jpg" , "l3.jpg" , "l2.jpg" , "yash.png" , "p1.jpg" , "p2.jpg" , "p3.jpg" , "p4.jpg" , "s2.jpg" , "sBanner.jpg" ,"s7.jpg", "t2.jpg" , "t3.jpg" , "qna2.jpeg","samSession.jpeg"].map((img, index) => (
            <div className="grid-item" key={index} onClick={() => openModal(`/images/TechEvent/${img}`)}>
              <img src={`/images/TechEvent/${img}`} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      {/* Image Popup Modal */}
      <ImageModal imageSrc={selectedImage} onClose={closeModal} />

      {/* Videos */}
      <section className="event-videos">
        <h2>🎬 Watch the Event Recap</h2>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-item">
              <h4>{video.title}</h4>
              <video controls width="400" height="300">
                <source src={`/videos/${video.src}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalEvent;