import React, { useEffect, useRef, useState } from "react";
import "../styles/imageModal.css";

const ImageModal = ({ images = [], currentIndex = 0, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const startX = useRef(0);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  const nextImage = () => {
    setZoom(1);
    setLoading(true);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setZoom(1);
    setLoading(true);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Zoom with scroll
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((z) =>
      Math.min(3, Math.max(1, z + (e.deltaY < 0 ? 0.2 : -0.2)))
    );
  };

  // Swipe support
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  if (!images.length) return null;

  return (
    <div className="img-modal-overlay" onClick={onClose}>
      <div
        className="img-modal-wrapper"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Close */}
        <button className="img-close" onClick={onClose}>✕</button>

        {/* Counter */}
        <div className="img-counter">
          {index + 1} / {images.length}
        </div>

        {/* Prev / Next */}
        <button className="nav-btn left" onClick={prevImage}>❮</button>
        <button className="nav-btn right" onClick={nextImage}>❯</button>

        {/* Loader */}
        {loading && <div className="img-skeleton" />}

        {/* Image */}
        <img
          src={images[index]}
          alt="Preview"
          className="img-modal-image"
          style={{ transform: `scale(${zoom})` }}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default ImageModal;
