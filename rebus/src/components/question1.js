import React, { useState } from 'react';
import './../css/question.css';

const Question1 = ({ setAnswer, setQuestion}) => {
    
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/submit-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: 'What does NFC stand for?',
        answer: selectedAnswer,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    setSelectedAnswer('');
  };

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <div className="everything">
      <form onSubmit={handleSubmit}>
        <h1 className="question">What does NFC stand for?</h1>
        <img src="./../data/Placeholder.svg" alt="Placeholder"></img>
        <div className="options">
          <div className="option">
            <label>
              <input
                type="radio"
                value="Network Field Communication"
                checked={selectedAnswer === 'Network Field Communication'}
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
                checked={selectedAnswer === 'Near Frequency Communication'}
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
                checked={selectedAnswer === 'Network Frequency Communication'}
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
                checked={selectedAnswer === 'Near Field Communication'}
                onChange={handleOptionChange}
              />
              Near Field Communication
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Question1;
