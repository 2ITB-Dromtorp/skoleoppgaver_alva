import users from '../data/users'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./../styles/register.css";


export default function Register({setPassord, setUsername, setIsLoggedIn, data}) {

    const navigate = useNavigate();

    const[InPassword, setInPassword] = useState("")
    const[InUsername, setInUsername] = useState("")
    const [errorMes, setErrorMes] = useState("");

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleRegister = (event) => {
        console.log("a")
        event.preventDefault();
        console.log("b")
        for (let i = 0; i < data.length; i++) {
            console.log("c")
            if  (InUsername === data.Username[i]) {
                console.log("username already in use")
            } else {
                
            }
        } 
    }

    return(
         <div>
         <form className='form' onSubmit={handleRegister}>
            <h1>Lag ny bruker</h1>
             <label className='label'>Brukernavn:</label>
             <input className='input' type="text" placeholder="Brukernavn..." onChange={handleUsername}/>
             <label className='label'>Passord:</label>
             <input className='input' type="text" placeholder="Passord..." onChange={handlePassword}/>
             <input className='submit' type="submit" value="Submit"/>
             <p>Har du allerede bruker? Log in <span onClick={() => navigate("/login")}>her</span></p>
         {errorMes && <div className="error-message">{errorMes}</div>}
         </form>
     </div>
    )

}

