import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Register from './register';
import users from './../data/users'


export default function Login({Username, Password, Email, setIsLoggedIn}) {

    const navigate = useNavigate();

    const[InPassword, setInPassword] = useState("")
    const[InUsername, setInUsername] = useState("")
    let ErrorMes = ""

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const logIn = () =>{
            for (let i = 0; i < users.data.length; i++) {
                if(users.data[i].username === InUsername){
                    for (let j = 0; j < users.data.length; j++) {
                        if(users.data[j].password === InPassword){
                            setIsLoggedIn(true)
                            navigate(-1)
                        }else{
                            console.log("Feil brukernavn og/eller passord")
                        };
                    }
                }else{
                    console.log("Feil brukernavn og/eller passord")
                };
            }

    return(
    <div>
        <h1>logg in:</h1>

        <label>
                brukernavn: <input type='username' value={InUsername} onChange={handleUsername}/> 
        </label>
        <label>
                passord: <input type='password' value={InPassword} onChange={handlePassword}/> 
        </label>
        <br/>
        <button onClick={() => navigate('./register')}>Har du ikke bruker? Registrer deg her:</button>

        <p> {ErrorMes} </p>
        <button onClick={logIn}> Logg in </button>
    </div>

    )

}
}