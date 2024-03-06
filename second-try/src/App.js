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

  if (questions.length === 0) {
      return <p>No questions found</p>;
  } else {
      return <Quiz questions={questions} />;
  }
}

export default App;
