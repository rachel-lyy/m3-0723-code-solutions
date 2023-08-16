import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Slide.css';

export default function Slide({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let timer;

  function handleBackClick() {
    clearInterval(timer);
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }
  function handleForwardClick() {
    clearInterval(timer);
    setActiveIndex((activeIndex + 1) % images.length);
  }

  function handleDotClick(i) {
    clearInterval(timer);
    setActiveIndex(i);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex, images.length]);

  return (
    <div className="slide-container">
      <div className="arrow-container">
        <FaChevronLeft onClick={handleBackClick} className="slide-arrows" />
      </div>
      <div className="image-container">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].name}
          className="img"
        />
      </div>
      <div className="arrow-container">
        <FaChevronRight onClick={handleForwardClick} className="slide-arrows" />
      </div>
      <div className="dots-container">
        {images.map((image, index) => (
          <div
            className={`indicator ${
              activeIndex === index ? 'dot active' : 'dot'
            }`}
            onClick={() => handleDotClick(index)}
            key="index"></div>
        ))}
      </div>
    </div>
  );
}
