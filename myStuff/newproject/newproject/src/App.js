import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/topnaveng'
import './styles/topnav.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  let HomePage;

  if (IsLoggedIn === true) {
    HomePage = SearchBar;
  } else {
    HomePage = Login;
  }

  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/login" element={<Login Password={Password} Username={Username} IsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
  )
}

export default App;