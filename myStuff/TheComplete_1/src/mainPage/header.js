import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="logo"></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
