import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ facts }) {
  // const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <Panel
        title={facts[0].title}
        details={facts[0].details}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      />
      <Panel
        title={facts[1].title}
        details={facts[1].details}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
      <Panel
        title={facts[2].title}
        details={facts[2].details}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      />
    </>
  );
}

function Panel({ title, details, isActive, onShow }) {
  return (
    <div>
      <section className="panel" onClick={onShow}>
        <h3>{title}</h3>
      </section>
      {isActive ? (
        <section className="panel panel-facts">
          <p>{details}</p>
        </section>
      ) : (
        ''
      )}
    </div>
  );
}
