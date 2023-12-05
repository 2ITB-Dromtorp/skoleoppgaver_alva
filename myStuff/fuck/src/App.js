import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Register from './register';
import { useState } from 'react';
import LoggedOut from './logged_out';

function App() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  let homePage;
  let accountPage;

  if (IsLoggedIn == true) {
    accountPage = <Account />;
  } else {
    accountPage = <Login />;
  }

  if (IsLoggedIn == true) {
    homePage = <Home />;
  } else {
    homePage = <LoggedOut />;
  }

  return (
    <Routes>
      <Route path="/" element={homePage } />
      <Route path="/Login/Register" element={<Register setUsername={setUsername} setPassword={setPassword} />} />
      <Route path="/Login" element={<Login Password={Password} Username={Username} setIsLogedIn={setIsLoggedIn}/>} />
    </Routes>
  );
}

export default App;