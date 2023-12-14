import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './../styles/login.css';
import './../data/users.json';

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