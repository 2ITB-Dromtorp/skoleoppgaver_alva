import React, { useState, useEffect } from 'react';
import Quiz from './components/quiz';

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/questions')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    return (
        <div className='app-container'>
            {questions.length > 0 ? <Quiz questions={questions} /> : <p>Loading...</p>}
        </div>
    );
}

export default App;
