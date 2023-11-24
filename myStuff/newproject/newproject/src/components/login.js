import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from './../data/users'
import './../styles/login.css';

export default function Login({Password, Username, setIsLoggedIn}) {

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

const handleSubmit = () =>{
    for (let i = 0; i < users.data.length; i++) {
        if(users.data[i].username === InUsername){
                if(users.data[i].password === InPassword){
                    setIsLoggedIn(true)
                    navigate('./topnaveng')
                    console.log("pppppppppppppppppppp")
                }else{
                    console.log("Feil brukernavn og/eller passord")
                };
        }else{
            console.log("Feil brukernavn og/eller passord")
        };        
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
        </div>

    );
}