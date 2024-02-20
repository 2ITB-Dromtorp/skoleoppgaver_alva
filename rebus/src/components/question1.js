import React, { useState } from 'react';
import axios from 'axios';
import './../css/question.css';

const Question1 = ({ setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/checkAnswer", {
      questionId: 1, // Assuming question ID is 1 for the first question
      selectedAnswer: selectedOption
    });
    setIsAnswerCorrect(response.data.isCorrect);
    setAnswer(selectedOption);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="everything">
      <form onSubmit={handleSubmit}>
        <h1 className="question">What does NFC stand for?</h1>
        <img src="./../src/Placeholder.svg" alt="Placeholder"></img>
        <div className="options">
          <div className="option">
            <label>
              <input
                type="radio"
                value="Network Field Communication"
                checked={selectedOption === 'Network Field Communication'}
                onChange={handleOptionChange}
              />
              Network Field Communication
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="radio"
                value="Near Frequency Communication"
                checked={selectedOption === 'Near Frequency Communication'}
                onChange={handleOptionChange}
              />
              Near Frequency Communication
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="radio"
                value="Network Frequency Communication"
                checked={selectedOption === 'Network Frequency Communication'}
                onChange={handleOptionChange}
              />
              Network Frequency Communication
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="radio"
                value="Near Field Communication"
                checked={selectedOption === 'Near Field Communication'}
                onChange={handleOptionChange}
              />
              Near Field Communication
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {isAnswerCorrect !== null && (
          <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect.'}</p>
        )}
      </form>
    </div>
  );
};

export default Question1;
