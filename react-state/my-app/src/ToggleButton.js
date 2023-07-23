import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton({ text, color }) {
  const [isClicked, setHasClicked] = useState(false);
  function handleClick() {
    if (isClicked === true) {
      console.log(isClicked, 'before useState');
      color = 'white';
      setHasClicked(false);
    } else {
      setHasClicked(true);
      console.log(isClicked, 'after useState');
    }
    // setHasClicked(!isClicked);
  }

  return (
    <button
      onClick={handleClick}
      {...(isClicked ? (color = 'white') : color)}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
