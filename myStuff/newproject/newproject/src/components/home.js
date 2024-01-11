import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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

        for (let i = 0; i < jsonData.length; i++) {
            console.log("aaaaaaa")
            const user = jsonData[i];
            if (InUsername === user.Username) {
              if (InPassword === user.Password) {
                setIsLoggedIn(true);
                navigate("/HomePage");
                return;
              } else {
                console.log("Password err");
                setErrorMes("Brukernavn og/eller passord feil");
              }
            } else {
              console.log("Username err");
              setErrorMes("Brukernavn og/eller passord feil");
            }
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
                <input className='submit' type="submit" value="Submit"/>
                <p>Har du ikke bruker? Registrer deg <span onClick={() => navigate("/login/register")}>her</span></p>
            {errorMes && <div className="error-message">{errorMes}</div>}
            </form>
        </div>

    );
}

export default Login;