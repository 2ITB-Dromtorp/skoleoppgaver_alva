import { useState } from "react";
import './../css/question.css';

const Question3 = ({ setAnswer }) => {

    const [selectedOption, setSelectedOption] = useState('');

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
                    <div className="question">What is the maximum data transfer rate of NFC technology?</div>
                    <img src="./../data/Placeholder.svg" alt="Placeholder"></img>
                    <div className="options">
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="106 kbps"
                            checked={selectedOption === '106 kbps'}
                            onChange={handleOptionChange}
                            />
                            106 kbps
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="1 Mbps"
                            checked={selectedOption === '1 Mbps'}
                            onChange={handleOptionChange}
                            />
                            1 Mbps
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="10 Mbps"
                            checked={selectedOption === '10 Mbps'}
                            onChange={handleOptionChange}
                            />
                            10 Mbps
                        </label>
                        </div>
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="100 Mbps"
                            checked={selectedOption === '100 Mbps'}
                            onChange={handleOptionChange}
                            />
                            100 Mbps
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

export default Question3;