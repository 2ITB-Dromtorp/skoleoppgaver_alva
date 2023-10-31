import {ChangeEvent, useState} from "react"

const App = () => {
  const [computerChoice, setcomputerChoice] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setcomputerChoice(randomNumberInRange(1, 3));
  };

  const handleRock = () => {
    setuserChoice(1)
  }

  const handlePaper = () => {
    setuserChoice(2)
  }

  const handleScissors = () => {
    setuserChoice(3)
  }

  const [userChoice, setuserChoice] = useState("");
  let response = " ";  
  let userWeapon = " ";
  let computerWeapon = " ";

  function Play(){
    if (userChoice = 1){
        if (computerChoice = 1){
            response = "Draw!";
        } else if (computerChoice = 2){
            response = "You lose!";
        } else if (computerChoice = 3){
            response = "You win!";
        }
    } else if (userChoice = 2){
        if (computerChoice = 1){
            response = "You win!";
        } else if (computerChoice = 2){
            response = "Draw!";
        } else if (computerChoice = 3){
            response = "You lose!";
        }
    } else if (userChoice = 3){
        if (computerChoice = 1){
            response = "You lose!";
        } else if (computerChoice = 2){
            response = "You win!";
        } else if (computerChoice = 3){
            response = "Draw!";
        }
    } else {
        response = "Error";
    }
 }

  return (
    <div>
      <h2>Rock, Paper, Scissors</h2>
      <img src = {}></img>
      <p>{response}</p>
      <form>
        <input type='text' onChange={change} value={inputText}/>
        <button onClick={handleRock}>Rock</button>
        <button onClick={handlePaper}>Paper</button>
        <button onClick={handleScissors}>Scissors</button>
      </form>
      <button onClick={handleClick}>Generate new attack</button>
    </div>
  );
};

export default App;