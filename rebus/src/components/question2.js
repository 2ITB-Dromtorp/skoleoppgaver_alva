import { useState } from "react";
import './../css/question.css';

const Question2 = ({ setAnswer }) => {

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
                    <div className="question">What is the purpose of the useEffect() hook in React?</div>
                    <img src="./../src/Placeholder.svg" alt="Placeholder"></img>
                    <div className="options">
                        <div className="option">
                        <label>
                            <input
                            type="radio"
                            value="To handle form submissions"
                            checked={setAnswer === 'Wrong'}
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
                            checked={setAnswer === 'Correct'}
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
                            checked={setAnswer === 'Wrong'}
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
                            checked={setAnswer === 'Wrong'}
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