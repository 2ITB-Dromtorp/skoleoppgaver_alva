import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/question.css';

const Questionbase = ({ setAnswer }) => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("http://localhost:3001/checkPage", {
          questionId: 1
        });
        setQuestionData(response.data);
      } catch (error) {
        console.error('Error fetching question data:', error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/checkAnswer", {
      questionId: 1, 
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
      {questionData && (
        <form onSubmit={handleSubmit}>
          <h1 className="question">{questionData.pageQuestion}</h1>
          <img src={questionData.imageSrc} alt="Placeholder"></img>
          <div className="options">
            {questionData.options.map((option, index) => (
              <div key={index} className="option">
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          {isAnswerCorrect !== null && (
            <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect.'}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Questionbase;
