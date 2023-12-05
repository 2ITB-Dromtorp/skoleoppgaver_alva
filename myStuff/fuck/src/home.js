import './App.css';
import { useNavigate } from 'react-router-dom';
import { createElement, useEffect } from 'react';
import { useState } from 'react';
import Register from './register';
import Login from './login';
import Courses from './courses';
import { MdOutlineAccountCircle } from "react-icons/md";
import { upload } from '@testing-library/user-event/dist/upload';

const Home = ({ onSelectItem }) => {

const navigate = useNavigate();

const Navigate = useNavigate();
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
      item.courseName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    localStorage.setItem('courses', JSON.stringify(filteredResults));
  };

  const updateUser {
    setUsers({
        ...Users[], 
        
      });
  }

  const handleClickItem = (index) => {
    onSelectItem(index, searchResults);
  };

return(
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
            className='accountbtn'
            onClick={() => navigate('./account')}
            type='button'
        ><MdOutlineAccountCircle /></input>
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
            <p className='resultTitle' >{result.courseName}</p>
            <p className='resultDate' >{result.courseDate}</p>
            <p className='resultTime' >{result.courseTime}</p>
            <button id='loggInKnapp' key={index} onClick={() => updateUser(index)}> Meld deg på </button>
            </div>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
)

}

export default Home;