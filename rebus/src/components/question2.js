import React, { useState } from 'react';
import axios from 'axios';
import './../css/question.css';

const Question2 = ({ setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/checkAnswer", {
      questionId: 2, 
      selectedAnswer: selectedOption
    });
    setIsAnswerCorrect(response.data.isCorrect);
    setAnswer(selectedOption);
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
        {isAnswerCorrect !== null && (
          <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect.'}</p>
        )}
      </form>
    </div>
  );
};




//-----------------------------------------------------------------------------------------------------------------------
    return (
        <div className="everything">
                <form onSubmit={handleSubmit}>
                    <div className="question">What is the purpose of the useEffect() hook in React?</div>
                    <img src="./../data/Placeholder.svg" alt="Placeholder"></img>
                    <div className="options">
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="To handle form submissions"
                            checked={selectedOption === 'To handle form submissions'}
                            onChange={handleOptionChange}
                            />
                            To handle form submissions
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="To perform side effects in functional components"
                            checked={selectedOption === 'To perform side effects in functional components'}
                            onChange={handleOptionChange}
                            />
                            To perform side effects in functional components
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="To manage global state"
                            checked={selectedOption === 'To manage global state'}
                            onChange={handleOptionChange}
                            />
                            To manage global state
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="To create reusable components"
                            checked={selectedOption === 'To create reusable components'}
                            onChange={handleOptionChange}
                            />
                            To create reusable components
                        </label>
                        </div>
                    </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>        
            </form>
        </div>
    );
}

export default Question2;