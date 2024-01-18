import axios from "axios";
import { useState, useEffect } from "react";

export default function Insert() {

    const [character, setCharacter] = useState('');
    const [sexuality, setSexuality] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let jsonObject = {
            newCharacter: character,
            newSexuality: sexuality,
            newUser: user
        }

        axios.post('http://localhost:3001/additem', jsonObject)
        .then(function (response) {
            console.log(response);

            setCharacter('');
            setSexuality('');
            setUser('');
        })
        .catch(function (error) {
            console.log(error)
        })
      };

    return (
        <div className="Insert-Container">
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <p>Character: </p>
                    <input type="text" id="CharacterBox" name="CharacterBox" value={character} onChange={(e) => setCharacter(e.target.value)} /><br/>
                </div>
                <div className='row'>
                    <p>Sexuality: </p>
                    <input type="text" id="SexualityBox" name="SexualityBox" value={sexuality} onChange={(e) => setSexuality(e.target.value)} /><br />
                </div>
                <div className='row'>
                    <p>User: </p>
                    <input type="text" id="UserBox" name="UserBox" value={user} onChange={(e) => setUser(e.target.value)} /><br />
                </div>
                <div className='row'>
                    <input type="submit" id='submitBTN' value="Add data" />
                </div>
            </form>
        </div>
    )
}