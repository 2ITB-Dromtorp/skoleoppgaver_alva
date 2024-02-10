import React, { useState } from 'react';
import './../css/question.css';

const Question1 = ({ setAnswer }) => {
    
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
    </div>
  );
};

export default Question1;
