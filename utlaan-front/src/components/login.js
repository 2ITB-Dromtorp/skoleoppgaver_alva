import React, { useState, useEffect } from "react";
import './../css/loginPage.css';
import axios from "axios";

export default function Login(userType) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let jsonObject = {
        newUsername: username,
        newPassword: password,
    }

    axios.post('http://localhost:3001/logIn', jsonObject)
    .then(function (response) {
        console.log(response);

        setUsername('');
        setPassword('');
    })
    .catch(function (error) {
        console.log(error)
    })
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login-row">
          <p>Username:</p>
          <input type="text" id="username-box" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        </div>
        <div className="login-row">
          <p>Password:</p>
          <input type="text" id="password-box" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        </div>
        <div className='login-row'>
          <input type="submit" id='submitBtn' value="Log in" />
        </div>
      </form>
    </div>
  );
}