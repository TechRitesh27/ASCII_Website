import React from "react";
import "../styles/technicalEvent.css";

const TechnicalEvent = () => {
  return (
    <div className="technical-event">
      <div className="tech-hero-section">
        <h1>AAROHAN 2K25 - Technical Event</h1>
      </div>

      {/* About Technical Event Section */}
      {/* Event Overview */}
      <section className="event-overview">
        <h2>📢 AAROHAN 2K25 - Technical Event Overview</h2>
        <p>
          The **Technical Event of Aarohan 2K25**, organized by the **ASCII Association** in collaboration with **PRECCON**,
          was a landmark success held on **April 11 & 12, 2025**, featuring over **150 enthusiastic participants** competing
          in logic, creativity, and innovation.
        </p>

        <p>⚡ **Day 1:** Paper Presentation in association with PRECCON, showcasing research ideas.</p>
        <p>🚀 **Day 2:** Five engaging competitions:</p>

        <ul>
          <li>💡 <b>Ideathon</b> – Innovation-based idea pitching</li>
          <li>🚀 <b>Nirmiti Hackathon</b> – The highlight event, building live projects</li>
          <li>📜 <b>Poster Presentation</b> – Research-backed creative visual displays</li>
          <li>🧩 <b>Logo Quiz</b> – Knowledge-based brand guessing competition</li>
          <li>🤖 <b>Technical Quiz</b> – Problem-solving challenges in core technologies</li>
        </ul>

        <p>
          🎙️ **Chief Guest - Mr. Samarth Kulkarni** delivered an **insightful keynote speech**, motivating students on industry
          trends. His **interactive Q&A session** allowed participants to ask questions about careers and technological advancements.
        </p>
      </section>


      <section className="competition-categories">
        <h2>🏆 Competition Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img src="/images/TechEvent/Hackathon.jpg" alt="Nirmiti Hackathon" />
            <h2>Nirmiti Hackathon</h2>
            <div className="category-text">Coding challenge with your team! Make your product and showcase it.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/PosterPresentation.jpg" alt="Poster Presentation" />
            <h2>Poster Presentation</h2>
            <div className="category-text">Show your art and explain the world.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/LogoQuiz.jpg" alt="Logo Quiz" />
            <h2>Logo Quiz</h2>
            <div className="category-text">Test your real-world knowledge by guessing logos!</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/Ideathon.jpg" alt="Ideathon" />
            <h2>Ideathon</h2>
            <div className="category-text">The starting phase of every project (Idea) - Let's explain your Ideas to us.</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/TechQuiz.jpg" alt="Technical Quiz" />
            <h2>Technical Quiz</h2>
            <div className="category-text">Technical knowledge check for Technical Students!!!</div>
          </div>

          <div className="category-card">
            <img src="/images/TechEvent/Samarth.jpg" alt="Samarth QnA Session" />
            <h2>QnA Session</h2>
            <div className="category-text">Let's make your doubt solved. The doubt session with chief guest Samarth Kulkarni.</div>
          </div>

        </div>
      </section>

      <section className="competition-details">
        <h2>🏆 Competition Breakdown</h2>
        <div className="competition-grid">
          <div className="competition-card">
            <h3>💡 Ideathon</h3>
            <p>📢 Registrations: 30 teams</p>
            <p>🏆 Winner: Team Alpha</p>
            <p>🥈 Runner-up: Team Innovate</p>
            <p>🎖 Consolation: Team Creative Minds</p>
          </div>

          <div className="competition-card">
            <h3>🚀 Nirmiti Hackathon</h3>
            <p>📢 Registrations: 45 teams</p>
            <p>🏆 Winner: Tech Titans</p>
            <p>🥈 Runner-up: Solo - Rahul Sharma</p>
            <p>🎖 Consolation: Debuggers</p>
          </div>

          <div className="competition-card">
            <h3>📜 Poster Presentation</h3>
            <p>📢 Registrations: 20 participants</p>
            <p>🏆 Winner: Solo - Priya Mehta</p>
            <p>🥈 Runner-up: Visionaries</p>
            <p>🎖 Consolation: Design Wizards</p>
          </div>

          <div className="competition-card">
            <h3>💡 Logo Quiz</h3>
            <p>📢 Registrations: 30 teams</p>
            <p>🏆 Winner: Team Alpha</p>
            <p>🥈 Runner-up: Team Innovate</p>
            <p>🎖 Consolation: Team Creative Minds</p>
          </div>

          <div className="competition-card">
            <h3>💡 Technical Quiz</h3>
            <p>📢 Registrations: 30 teams</p>
            <p>🏆 Winner: Team Alpha</p>
            <p>🥈 Runner-up: Team Innovate</p>
            <p>🎖 Consolation: Team Creative Minds</p>
          </div>
        </div>
      </section>

      {/* Chief Guest Samarth */}
      <section className="chief-guest">
        <h2>🎙️ Chief Guest - Samarth Kulkarni</h2>
        <div className="guest-content">
          <img src="/images/samarth-kulkarni.jpg" alt="Samarth Kulkarni" className="guest-img" />
          <div className="guest-text">
            <p>
              We were honored to welcome <strong>Samarth Kulkarni</strong> at AAROHAN 2K25, where he shared valuable insights on
              <strong>innovation, career growth, and emerging technologies</strong>. His keynote speech inspired students to
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
        <h2>📸 Event Highlights</h2>
        <div className="gallery-grid">
          <img src="/images/event1.jpg" alt="Hackathon in action" />
          <img src="/images/event2.jpg" alt="Poster Presentation" />
          <img src="/images/event3.jpg" alt="Technical Quiz winners" />
          <img src="/images/event4.jpg" alt="Chief Guest Session" />
        </div>

        <h3>🎬 Watch the Event Recap</h3>
        <video controls width="600">
          <source src="/videos/aarohan-tech-event.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Winners and awards */}
      <section className="competition-results">
        <h2>🏆 Winners & Awards</h2>
        <p>Here’s a breakdown of the competition results:</p>
        <div className="result-table">
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Winner</th>
                <th>Runner-up</th>
                <th>Consolation Prize</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>💡 Ideathon</td>
                <td>Team Alpha</td>
                <td>Team Innovate</td>
                <td>Team Creative Minds</td>
              </tr>
              <tr>
                <td>🚀 Nirmiti Hackathon</td>
                <td>Team Tech Titans</td>
                <td>Solo - Rahul Sharma</td>
                <td>Team Debuggers</td>
              </tr>
              <tr>
                <td>📜 Poster Presentation</td>
                <td>Solo - Priya Mehta</td>
                <td>Team Visionaries</td>
                <td>Team Design Wizards</td>
              </tr>
              <tr>
                <td>🧩 Logo Quiz</td>
                <td>Solo - Akash Patel</td>
                <td>Team Thinkers</td>
                <td>—</td>
              </tr>
              <tr>
                <td>🤖 Technical Quiz</td>
                <td>Team Brainiacs</td>
                <td>Solo - Neha Verma</td>
                <td>Team Codemasters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TechnicalEvent;