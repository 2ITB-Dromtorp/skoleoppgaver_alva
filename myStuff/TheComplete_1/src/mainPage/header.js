import React from 'react';
import Hamburger from './hamburger.js';

export default function Nav() {

  return (
<<<<<<< HEAD
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="logo"></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Contact</li>
        </ul>
=======
    <div className='navigation'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='hamburger'>
        <Hamburger />
>>>>>>> b004e753017be49eb358cf36f9446457eab59d0e
      </div>
    </div>
  );
};


