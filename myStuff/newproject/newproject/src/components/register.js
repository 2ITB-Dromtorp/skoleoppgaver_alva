import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./../styles/register.css";
import jsonData from "./data.json";

const Register = ({setPassord, setUsername, setIsLoggedIn, data}) => {

    const navigate = useNavigate();

    let jsonData = require('./../data/users.json');
    jsonData = Array.isArray(jsonData) ? jsonData : [];

    const [InPassword, setInPassword] = useState("")
    const [InUsername, setInUsername] = useState("")
    const [errorMes, setErrorMes] = useState("");
    const [items, setItems] = useState([]);

    const deleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
      };
      
    useEffect(() => {
        setItems(jsonData);
      }, []);

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const handleRegister = (event) => {
        event.preventDefault();
    
        if (!jsonData) {
            console.error("user data is not available");
            return;
        }
    
        const foundUser = jsonData.find(user => user.username === InUsername);
    
        if (!foundUser) {
            if (InPassword.length < 1) {
                console.log("User created");
                setErrorMes("Passord er for kort");
            } else {
                console.log("User created");
                setIsLoggedIn(true);
                navigate("/home");
                const newjsonData = [...jsonData, {"username": InUsername, "password": InPassword, "InNorwegian": false, "inHeimkunnskap": false, "inGrunnleggendeDatakunnskap": false, "inKroppsoving": false }]
                jsonData = newjsonData;
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