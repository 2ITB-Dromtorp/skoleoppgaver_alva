import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './../styles/login.css';

const Login = ({Password, Username, setIsLoggedIn, data}) => {
    
    const navigate = useNavigate();

    console.log(data)

    const [InPassword, setInPassword] = useState("")
    const [InUsername, setInUsername] = useState("")
    const [errorMes, setErrorMes] = useState("");

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!data) {
            console.error("Users data is not available");
            return;
          }

        for (let i = 0; i < data.length; i++) {
            if  (InPassword === data.Username[i]) {
                if (InPassword === data.Password[i]) [
                    setIsLoggedIn(true),
                    useNavigate("./HomePage"),
                    console.log("")
                ]
            }
        } 
    }

    return(
        <div onSubmit={handleSubmit}>
            <form className='form'>
                <label className='label'>Brukernavn:</label>
                <input className='input' type="text" placeholder="Brukernavn..." onChange={handleUsername}/>
                <label className='label'>Passord:</label>
                <input className='input' type="text" placeholder="Passord..." onChange={handlePassword}/>
                <input className='submit' type="submit" value="Submit"/>
            </form>
            <br/>
            {errorMes && <div className="error-message">{errorMes}</div>}
        </div>

    );
}

export default Login;