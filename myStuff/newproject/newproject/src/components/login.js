import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import users from './users';
import './../styles/login.css';

export default function Login({Password, Username, setIsLoggedIn}) {

    const navigate = useNavigate();

    const [users, setUsers] = useState(null);
    const[InPassword, setInPassword] = useState("")
    const[InUsername, setInUsername] = useState("")
    const [errorMes, setErrorMes] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('./../data/users');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!users || !users.data) {
            console.error("Users data is not available");
            return;
          }

        const user = users.data.find((u) => u.username === InUsername);
    
        if (user) {
          if (user.password === InPassword) {
            setIsLoggedIn(true);
            navigate('./topnaveng');
            console.log("Login successful");
          } else {
            setErrorMes("Feil brukernavn og/eller passord");
          }
        } else {
          setErrorMes("Feil brukernavn og/eller passord");
        }
      };

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