import React from "react";
import "../styles/footer.css"; // Ensure footer styles are properly applied


const Footer = () => {
  return (
    <footer>
      <h2>📞 Contact Details</h2>
      <p>
        🏢 ASCII | Association of Students of Computer Engineering <br />
        📍 PREC Loni, Computer Department <br />
        📱 Contact: <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a> <br />
        ✉️ Email: <a href="mailto:ascii.prec@gmail.com">ascii.prec@gmail.com</a> <br />
        🔗 Follow us: 
        <a href="https://instagram.com/ascii.prec" target="_blank">📷 Instagram</a> | 
        <a href="https://youtube.com/ascii.prec" target="_blank">🎥 YouTube</a> <br />
        © 2025 ASCII Committee. All Rights Reserved. <br />
        ✍️ Author - <strong>Ritesh Ukade</strong>
      </p>
    </footer>
  );
};

export default Footer;