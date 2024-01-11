import React, { useState, useEffect } from 'react';
import './../style/Topnav.css';
import { tracks, tracksBackup } from '../data/tracks';

const SearchBar = ({ onSelectItem }) => {
  const [Tracks, setTracks] = useState(shuffleArray(tracks));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const savedTracks = JSON.parse(localStorage.getItem('tracks'));
    if (!savedTracks) {
      localStorage.setItem('tracks', JSON.stringify(tracks));
      setSearchResults(tracks);
    } else {
      setSearchResults(savedTracks);
    }
  }, []);

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
            <input
              className='shufflebutton'
              type='button'
            ></input>
            <input
              className='orderbutton'
              type='button'
            />
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
