import './tasks.css';
import React from 'react';

const Opg1 = () => {

    let UserName = 'Samantha'
    let UserAge = '19'
    let DogName = 'Lady'
    let DogAge = '3'
    let UserDogAge = '95'

    function onClick() {
        UserName = YourName
        UserAge = YourAge
        DogName = YourDogsName
        DogAge = YourDogsAge
        UserDogAge = YourAge * 7
    };

    return (
        <div task1>

            <div classname='Task'>
                <h1>Your name is Samantha<br></br>Your age is 19</h1>
                <h2>Your dog's name is Lady<br></br>Your dog's age is 3</h2>
                <h3>Your age in dog years is 95</h3>
            </div>

            <div classname='Task'>

                <form method='get' >
                    <label for="YourName">Your name:</label>
                    <input type="text" id="YourName" value={YourName}>.</input>
                    <label for="YourName">Your age:</label>
                    <input type="text" id="YourAge" value={YourAge}>.</input>
                    <label for="YourName">Your dog's name:</label>
                    <input type="text" id="YourDogsName" value={YourDogsName}>.</input>
                    <label for="YourName">Your dog's age:</label>
                    <input type="text" id="YourDogsAge" value={YourDogsAge}>.</input>
                    <input type="submit" id="Submit" onClick={onClick}></input>
                </form>

                <h1>Name: {}<br></br>Age: YourAge</h1>
                <h2>Dog Name: DogName<br></br>Dog Age: DogAge</h2>
                <h3></h3>

            </div>

        </div>
    )
}

export default Opg1;