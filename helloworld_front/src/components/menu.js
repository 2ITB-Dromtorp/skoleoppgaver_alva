import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import './../css/menu.css';

const Menu = ({ onHomeClick, onListClick, onAddClick }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div className={`side-panel ${collapsed ? 'collapsed' : ''}`}>
        <button onClick={toggleCollapse}>
          <IoClose />
        </button>
        <p className="side-selection" id='Homebtn' onClick={onHomeClick}>
          Home
        </p>
        <p className="side-selection" id='InterestingExcerptsbtn' onClick={onListClick}>
          Interesting Excerpts
        </p>
        <p className="side-selection" id='FullListbtn' onClick={onListClick}>
            Full List
        </p>
        <p className='side-selection' id='InsertDatabtn' onClick={onAddClick}>
            Insert Data
        </p>
      </div>
      <button className="openbtn" onClick={toggleCollapse}>
        <IoMenu />
      </button>
    </div>
  );
};

export default Menu;
