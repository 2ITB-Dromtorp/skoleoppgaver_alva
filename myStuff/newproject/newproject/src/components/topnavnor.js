import React, { useState, useEffect } from 'react';
import './../styles/topnav.css';
import Courses from '../data/courses';

const SearchBar = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('courses'));
    if (!savedCourses) {
      localStorage.setItem('courses', JSON.stringify(Courses));
      setSearchResults(Courses);
    } else {
      setSearchResults(savedCourses);
    }
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = Courses.filter((item) =>
      item.courseNameNor.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    localStorage.setItem('courses', JSON.stringify(filteredResults));
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
      </div>
      <ul>
        <div className='resultContainer'>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleClickItem(index)}>
            <div className='result'>
            <img
              src={result.src} 
              alt={result.courseNameNor}
              style={{ width: '11vw', height: '11vw', cursor: 'pointer' }}
            />
            <div className='resultDescription'>
            <p className='resultTitle' >{result.courseNameNor}</p>
            <p className='resultDate' >{result.date}</p>
            <p className='resultTime' >{result.timeNor}</p>
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
