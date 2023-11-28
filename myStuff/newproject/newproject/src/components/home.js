import React, { useState, useEffect } from 'react';
import './../styles/topnav.css';
import Courses from '../data/courses';
import { useNavigate } from 'react-router-dom';
import jsonData from './../data/users.json';

const SearchBar = ({ onSelectItem, data }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  console.log(jsonData)

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
      item.courseName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    localStorage.setItem('courses', JSON.stringify(filteredResults));
  };

  const handleClickItem = (index) => {
    navigate("/home/"+index)
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
              className='resultImage'
              src={result.src} 
              alt={result.courseName}
            />
            <div className='resultDescription'>
            <p className='resultTitle' value={result.courseName} />
            <p className='resultDate' value={result.date} />
            <p className='resultTime' value={result.time} />
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