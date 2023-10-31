import {ChangeEvent, useState} from "react"

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 50));
  };

  const [inputText, setInputText] = useState("");
  let response = " ";  

  if (inputText == num){
    response = "You're correct!";
  } else if (inputText == ""){
    response = "Guess a number between 1 and 50"
  } else if (inputText > num){
    response = "Your number is too high.";
  } else if (inputText < num){
    response = "Your number is too low.";
  } else {
    response = "That is no number!";
  }

  const change = event => {
    setInputText(event.target.value)
  }

  return (
    <div>
      <h2>Number guessing game</h2>
      <p>{response}</p>
      <form>
        <input type='text' onChange={change} value={inputText}/>
      </form>
      <button onClick={handleClick}>Generate new number</button>
    </div>
  );
};

export default App;