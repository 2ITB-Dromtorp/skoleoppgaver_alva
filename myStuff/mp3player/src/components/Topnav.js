import React, { useState } from 'react';
import './../style/Topnav.css';
import { tracks } from '../data/tracks';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = data.filter((item) =>
      item.Title.toLowerCase().includes(term.toLowerCase()) ||
      item.DisplayName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);
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
      </div>
      <ul>
        <div className='resultContainer'>
        {searchResults.map((result, index) => (
          <li key={index}>
            <img
              src={result.thumbnail} 
              alt={result.Title}
              style={{ width: '8vw', height: '8vw' }}
            />
            <strong>{result.Title}</strong>: {result.DisplayName}
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default SearchBar;
