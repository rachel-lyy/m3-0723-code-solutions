import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ text, className }) {
  let [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((index += 1));
  }
  if (index < 3) {
    className = 'cold';
  } else if (index < 6) {
    className = 'cool';
  } else if (index < 9) {
    className = 'lukewarm';
  } else if (index < 12) {
    className = 'warm';
  } else if (index < 15) {
    className = 'warmer';
  } else {
    className = 'hot';
  }
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
