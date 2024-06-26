import React, { useState, useEffect } from 'react';
import './../style/Topnav.css';
import { tracks } from './../data/tracks';
import { FaShuffle } from "react-icons/fa6";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchBar = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const savedTracks = JSON.parse(localStorage.getItem('tracks'));
    if (!savedTracks) {
      localStorage.setItem('tracks', JSON.stringify(tracks));
      setSearchResults(tracks);
    } else {
      setSearchResults(savedTracks);
    }
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = tracks.filter((item) =>
      item.Title.toLowerCase().includes(term.toLowerCase()) ||
      item.DisplayName.toLowerCase().includes(term.toLowerCase()) 
    );

    setSearchResults(filteredResults);

    localStorage.setItem('tracks', JSON.stringify(filteredResults));
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  const shuffle = () => {
    const shuffledResults = [...searchResults];
    const shuffledArray = shuffleArray(shuffledResults);
    setSearchResults(shuffledArray);
  
    localStorage.setItem('tracks', JSON.stringify(shuffledArray));
  };

  const handleClickItem = (index) => {
    onSelectItem(index, searchResults);
  };

  return (
    <div>
        <div className='Header'>
        <input
                className='SearchBar'
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='dropbown'>
              <button className='dropdownbtn' onClick={toggleCollapse}>Order by</button>
                <div className={`dropdown-content ${collapsed ? 'collapsed' : ''}`}>
                  <p>Chronological <FaClockRotateLeft /></p>
                  <p>Alphabetical <FaSortAlphaDown /></p>
                  <p>Shuffle <FaShuffle /></p>
                </div>
            </div>
      </div>
      <ul>
        <div className='resultContainer'>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleClickItem(index)}>
            <div className='result'>
            <img
              src={result.thumbnail} 
              alt={result.Title}
              style={{ width: '11vw', height: '11vw', cursor: 'pointer' }}
            />
            <div className='resultDescription'>
            <p className='resultTitle' >{result.Title}</p>
            <br/>
            <p className='resultDisplayName' >{result.DisplayName}</p>
            </div>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default SearchBar;
