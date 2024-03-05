import React, { useState } from 'react';
import './../css/question.css'; 

function Question({ question, isCorrect, setIsCorrect, submitted, setSubmitted }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        if (!submitted) {
            setSelectedOption(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = question.answers.find(answer => answer.correct);
        setIsCorrect(selectedOption === correctAnswer.text);
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="question-container">
            <h1 className="question">{question.question}</h1>
            <div className="options">
                {question.answers.map((answer, index) => (
                    <div key={index} className="option">
                        <label>
                            <input
                                type="radio"
                                value={answer.text}
                                checked={selectedOption === answer.text}
                                onChange={handleOptionChange}
                                disabled={submitted}
                            />
                            {answer.text}
                        </label>
                    </div>
                ))}
            </div>
            <button type="submit" className="submit-btn" disabled={submitted}>Submit</button>
            {isCorrect === true && submitted && <p className="feedback correct">Correct!</p>}
            {isCorrect === false && submitted && <p className="feedback incorrect">Incorrect. The correct answer is: {question.answers.find(answer => answer.correct).text}</p>}
        </form>
    );
}

export default Question;
