import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/topnaveng'
import './styles/topnav.css';
import Login from './components/login';
import Register from './components/register';
import users from './data/users.json';

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

    <div>
      <Routes>
        <Route path="/" element={<HomePage Password={Password} Username={Username} IsLoggedIn={setIsLoggedIn} data={users} />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/login" element={<Login Password={Password} Username={Username} IsLoggedIn={setIsLoggedIn} data={users} />} />
      </Routes>
      </div>
  )
}

export default App;