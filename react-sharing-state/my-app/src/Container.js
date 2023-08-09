import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [activeIndex, setIndex] = useState(0);
  function handlePrev() {
    setIndex((activeIndex - 1 + items.length) % items.length);
  }
  function handleNext() {
    setIndex((activeIndex + 1) % items.length);
  }
  function handleIndicator(i) {
    setIndex(i);
  }
  return (
    <div>
      <div>{items[activeIndex]}</div>
      <div>
        <CustomButton text="Prev" onClick={handlePrev} />
        <Indicators
          count={items.length}
          activeIndex={activeIndex}
          onClick={handleIndicator}
        />
        <CustomButton text="Next" onClick={handleNext} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, color = 'white', onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, activeIndex, onClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onClick={() => onClick(i)}
        color={activeIndex === i ? 'lightblue' : 'white'}
      />
    );
  }
  return <div>{buttons}</div>;
}
