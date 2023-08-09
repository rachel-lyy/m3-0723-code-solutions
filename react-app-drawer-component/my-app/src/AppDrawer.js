import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function AppDrawer({ title, navLinks, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function displayContent(link) {
    toggleMenu();
    onSelect(link);
  }
  return (
    <div>
      <FaBars onClick={toggleMenu} className={isOpen ? 'hidden' : 'bar-icon'} />
      <Backdrop isOn={isOpen} onClick={toggleMenu} />
      <Menu isOpen={isOpen}>
        <h2 className="nav-title" onClick={toggleMenu}>
          {title}
        </h2>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              className="nav-link"
              key={link}
              onClick={() => displayContent(link)}>
              {link}
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
}
function Menu({ isOpen, children }) {
  const className = isOpen ? 'nav' : 'nav-hidden';
  return <div className={className}>{children}</div>;
}
function Backdrop({ isOn, onClick }) {
  const className = isOn ? 'backdrop backdrop-dark' : 'backdrop ';
  return <div className={className} onClick={onClick}></div>;
}
