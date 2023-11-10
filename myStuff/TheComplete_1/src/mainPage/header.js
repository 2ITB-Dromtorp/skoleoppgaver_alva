import React from 'react';
import Hamburger from './hamburger.js';

export default function Nav() {

  return (
    <div className='navigation'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='hamburger'>
        <Hamburger />
      </div>
    </div>
  );
};


