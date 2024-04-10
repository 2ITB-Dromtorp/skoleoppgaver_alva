import React, { useState } from "react";
import './../css/loginPage.css';
import axios from "axios";

export default function Login({ setUserType, setUserID }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    event.preventDefault();

    let jsonObject = {
      newUsername: username,
      newPassword: password,
    };

    console.log(jsonObject);

    axios.post('http://localhost:3001/logIn', jsonObject)
      .then(function (response) {
        console.log(response);

        setUsername('');
        setPassword('');
        
      })
      .catch(function (error) {
        console.log(error);
      });    
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button> 
        </div>
      </form>
    </div>
  );
}
