import { useState } from "react";
import './../css/question.css';

const Question2 = ({ setAnswer }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');

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