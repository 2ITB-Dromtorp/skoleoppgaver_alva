<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './../styles/login.css';
import '../data/users.json';

const Login = ({Password, Username, setIsLoggedIn, data}) => {
    
    const navigate = useNavigate();

    const [InPassword, setInPassword] = useState("");
    const [InUsername, setInUsername] = useState("");
    const [errorMes, setErrorMes] = useState("");

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!jsonData) {
            console.error("user data is not available");
            return;
        } 

        const usersArray = Object.entries(jsonData).map(([key, value]) => value);

        const foundUser = usersArray.find(user => user.username === InUsername);

        if (foundUser) {
            if (foundUser.password === InPassword) {
                console.log("Login successful");
                setIsLoggedIn(true);
                navigate("/home");
            } else {
                console.log("Password incorrect");
                setErrorMes("Brukernavn og/eller passord feil");
            }
        } else {
            console.log("User not found");
            setErrorMes("Brukernavn og/eller passord feil");
        }
    }

    return(
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <label className='label'>Brukernavn:</label>
                <input className='input' type="text" placeholder="Brukernavn..." onChange={handleUsername}/>
                <label className='label'>Passord:</label>
                <input className='input' type="text" placeholder="Passord..." onChange={handlePassword}/>
                <input className='submit' type="submit" value="Submit" />
                <p>Har du ikke bruker? Registrer deg <span onClick={() => navigate("/login/register")}>her</span></p>
            {errorMes && <div className="error-message" value={errorMes} />}
            </form>
        </div>

    );
}

export default Login;
=======
import React, { useState, useEffect } from 'react';
import './../styles/topnav.css';
import Courses from '../data/courses';
import { useNavigate } from 'react-router-dom';
import jsonData from './../data/users.json';
import { IoClose } from "react-icons/io5";

const SearchBar = ({ onSelectItem, data }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResults, setSelectedResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  console.log(jsonData);

  const Popup = ({ selectedResult, onClose }) => {
    return (
      <div className="popup">
        <img className='popup-image' src={selectedResult.src} alt={selectedResult.courseName} />
        <div className='courseInfo'>
          <div className='courseTopnav'>
            <h1>{selectedResult.courseName}</h1>
            <p>{selectedResult.time}</p>
            <button className='closeBtn' onClick={onClose}><IoClose /></button>
          </div>
          <p>{selectedResult.courseInfo1}</p>
          <br />
          <p>{selectedResult.courseInfo2}</p>
        </div>
      </div>
    );
  };

  const handlePopupVisibility = (result) => {
    setSelectedResult(result);
    setIsPopupVisible(!isPopupVisible);
  };
  
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
    const clickedItem = searchResults[index];

    setSearchResults((prevResults) =>
      prevResults.filter((item) => item !== clickedItem)
    );
    setSelectedResults((prevSelected) => [...prevSelected, clickedItem]);
  };

  const handleRemoveItem = (index) => {
    const removedItem = selectedResults[index];
    setSelectedResults((prevSelected) =>
      prevSelected.filter((item) => item !== removedItem)
    );

    if (!searchResults.includes(removedItem)) {
      setSearchResults((prevResults) => [...prevResults, removedItem]);
    }
  };

  return (
    <div>
      <div className='Header'>
        <input
          className='SearchBar'
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='column'>
        <div className='row-container'>
        <h2>Tilgjengelige Kurs:</h2>
        <ul>
          <div className='resultContainer'>
            {searchResults.map((result, index) => (
              <li key={index}>
                <div className='result'>
                  <img className='resultImage' src={result.src} alt={result.courseName} />
                  <div className='resultDescription'>
                    <p className='resultTitle'>{result.courseName}</p>
                    <p className='resultTime'>{result.time}</p>
                    <p className='smuggledData'>{result.courseInfo1}</p>
                    <p className='smuggledData'>{result.courseInfo2}</p>
                    <div className='buttons'>
                      <button className='moveItemBtn' onClick={() => handleClickItem(index)}>Meld deg på!</button>
                      <button className='popupBtn' onClick={() => handlePopupVisibility(result)}>Info</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
          {isPopupVisible && <Popup selectedResult={selectedResult} onClose={() => setIsPopupVisible(false)} />}
        </ul>
        </div>
      </div>
      <div className='column'>
      <div className='row-container'>
      <h2>Dine Kurs:</h2>
        <ul>
          <div className='courseContainer'>
            {selectedResults.map((result, index) => (
              <li key={index}> 
                <div className='result'>
                  <img className='resultImage' src={result.src} alt={result.courseName} />
                  <div className='resultDescription'>
                    <p className='resultTitle'>{result.courseName}</p>
                    <p className='resultTime'>{result.time}</p>
                    <p className='smuggledData'>{result.courseInfo1}</p>
                    <p className='smuggledData'>{result.courseInfo2}</p>
                    <button className='moveItemBtn' onClick={() => handleRemoveItem(index)}>Meld deg av</button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e
