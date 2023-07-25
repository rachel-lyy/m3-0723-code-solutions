import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ className, mode }) {
  let [isClicked, setHasClicked] = useState(false);
  function handleClick() {
    setHasClicked(!isClicked);
  }
  if (isClicked) {
    className = 'toggle round slider-on ';
    mode = 'off';
  } else {
    className = 'toggle round slider-off';
    mode = 'on';
  }
  return (
    <div className={`container ${isClicked ? 'bkg-on' : 'bkg-off'}`} mode="off">
      <label
        className={`toggle-switch ${isClicked ? 'slider-on' : 'slider-off'}`}>
        <input type="checkbox" />
        <span
          className={`toggle round ${className}`}
          onClick={handleClick}></span>
      </label>
      <div className="label">{isClicked ? 'ON' : 'OFF'}</div>
    </div>
  );
}
