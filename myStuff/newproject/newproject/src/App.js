import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/home';
import './styles/topnav.css';
import Login from './components/login';
import Register from './components/register';
import jsonData from './data/users.json';

function App() {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  console.log(jsonData);

  let HomePage;

  if (IsLoggedIn === true) {
    HomePage = SearchBar;
  } else {
    HomePage = Login;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage Password={Password} Username={Username} setIsLoggedIn={setIsLoggedIn} data={jsonData} />} />
      <Route path="/login/register" element={<Register Password={Password} Username={Username} setIsLoggedIn={setIsLoggedIn} data={jsonData} />} />
      <Route path="/login" element={<Login Password={Password} Username={Username} setIsLoggedIn={setIsLoggedIn} data={jsonData} />} />
      <Route path='/home' element={<HomePage Password={Password} Username={Username} setIsLoggedIn={setIsLoggedIn} data={jsonData} />} />
    </Routes>
  );
}

export default App;