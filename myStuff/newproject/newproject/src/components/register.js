import users from './users'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Register({setPassord, setUsername}) {

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

    const handleRegister = () =>{
        if (InUsername.length === 0 || InPassword.length === 0) {
            console.log("vennligst fyll in feltene")
        } else {
            const newusers = [...users, {"username": {InUsername}, "password": {InPassword}, "inNorwegian": false, "inHeimkunnskap": false, "inGrunnleggendeDatakunnskap": false, "inKroppsoving": false }]
            navigate(-1)
        }
    }

    return(
        <div onSubmit={handleRegister}>
            <form>
                <label>Brukernavn</label>
                <input type="text" value="Brukernavn..." onChange={handleUsername}/>
                <label>Passord</label>
                <input type="text" value="Passord..." onChange={handlePassword}/>
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <button onClick={() => navigate('/Login')} value="Har du bruker? Logg in her:" />
        </div>
    )

}

