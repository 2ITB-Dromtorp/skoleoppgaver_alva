import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Question1 from './components/question1.js';
import Question2 from './components/question2.js';
import Question3 from './components/question3.js';

function App() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/question1" element={<Question1 setAnswer={setAnswer} setQuestion={setQuestion} setSelectedQuestion={setSelectedQuestion} setSelectedAnswer={setSelectedAnswer} />} />
        <Route path="/question2" element={<Question2 setAnswer={setAnswer} setQuestion={setQuestion} setSelectedQuestion={setSelectedQuestion} setSelectedAnswer={setSelectedAnswer} />} />
        <Route path="/question3" element={<Question3 setAnswer={setAnswer} setQuestion={setQuestion} setSelectedQuestion={setSelectedQuestion} setSelectedAnswer={setSelectedAnswer} />} />
      </Routes>
    </Router>
  );
}

export default App;
