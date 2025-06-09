import React from "react";
import "../styles/imageModal.css";

const ImageModal = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Full View" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;