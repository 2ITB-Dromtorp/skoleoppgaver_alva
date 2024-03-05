import React, { useState } from 'react';
import Question from './question';
import './../css/question.css'; 

function Quiz({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            resetFeedback();
            setSubmitted(false);
        } else {
            console.log("No more questions available");
        }
    };

    const resetFeedback = () => {
        setIsCorrect(null);
    };

    return (
        <div>
            <Question question={questions[currentQuestion]} isCorrect={isCorrect} setIsCorrect={setIsCorrect} submitted={submitted} setSubmitted={setSubmitted} />
            <button className='next-question' onClick={handleNextQuestion} disabled={!submitted}>Next Question</button>
        </div>
    );
}

export default Quiz;
