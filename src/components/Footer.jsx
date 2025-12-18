import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2>📞 Contact Details</h2>

        <p>
          🏢 <strong>ASCII</strong> | Association of Students of Computer Engineering <br />
          📍 PREC Loni, Computer Department
        </p>

        <p>
          📱 <a href="tel:+917517541081">+91-7517541081</a> <br />
          ✉️ <a href="mailto:ascii.prec@gmail.com">ascii.prec@gmail.com</a>
        </p>

        <div className="footer-links">
          🔗 Follow us:
          <a
            href="https://www.instagram.com/ascii_comp?igsh=MXFjNXZlcWh6a3RjNA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>
          <span>|</span>
          <a
            href="https://youtube.com/ascii.prec"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎥 YouTube
          </a>
        </div>

        <p className="copyright">
          © 2025 ASCII Committee. All Rights Reserved.
        </p>

        <p className="author">
          ✍️ Author – <strong>TE COMP 2024–25</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
