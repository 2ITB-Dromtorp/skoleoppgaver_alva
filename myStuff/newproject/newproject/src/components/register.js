import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "./../styles/register.css";

<<<<<<< HEAD

=======
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e
const Register = ({setPassord, setUsername, setIsLoggedIn, data}) => {

    const navigate = useNavigate();

    let jsonData = require('./../data/users.json');
<<<<<<< HEAD
    jsonData = Array,isArray(jsonData) ? jsonData : [];

    const[InPassword, setInPassword] = useState("");
    const[InUsername, setInUsername] = useState("");
    const [errorMes, setErrorMes] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(jsonData);
    })
=======
    jsonData = Array.isArray(jsonData) ? jsonData : [];

    const [InPassword, setInPassword] = useState("")
    const [InUsername, setInUsername] = useState("")
    const [errorMes, setErrorMes] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
        setItems([...items, newItem]);
    };

    useEffect(() => {
        setItems(jsonData);
      }, []);
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleRegister = (event) => {
        event.preventDefault();
<<<<<<< HEAD

=======
    
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e
        if (!jsonData) {
            console.error("user data is not available");
            return;
        }
<<<<<<< HEAD

        const foundUser = jsonData.find(user => user.username === InUsername);

=======
    
        const foundUser = jsonData.find(user => user.username === InUsername);
    
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e
        if (!foundUser) {
            if (InPassword.length < 1) {
                console.log("User created");
                setErrorMes("Passord er for kort");
            } else {
                console.log("User created");
                setIsLoggedIn(true);
<<<<<<< HEAD
                navigate("/home");
                const newjsonData = [...jsonData, {"username": InUsername, "password": InPassword, "InNorwegian": false, "inHeimkunnskap": false, "inGrunnleggendeDatakunnskap": false, "inKroppsoving": false }]
                jsonData = newjsonData;
=======
                const newItem = { username: InUsername, password: InPassword, inNorwegian: false, inHeimkunnskap: false, inGrunnleggendeDatakunnskap: false, inKroppsoving: false };
                setItems([...items, newItem]);
                navigate("/home");
>>>>>>> ce1c7337b176b4124b9765ac2ae096e9fb40554e
            }
        } else {
            console.log("User found");
            setErrorMes("Brukernavn er opptatt");
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

export default Register;