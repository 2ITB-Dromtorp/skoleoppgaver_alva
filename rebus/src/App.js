import './App.css';

import { initializeApp } from "firebase/app";

import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Q1 from './components/question1';
import Q2 from './components/question2';
import Q3 from './components/question3';

import validTest1 from './components/validTest1';
import validTest2 from './components/validTest2';
import validTest3 from './components/validTest3';

function App() {
  return (
    function App() {

      const [user, setUser] = useState("");
      const [answer, setAnswer] = useState("");
      const [question, setQuestion] = useState("");
      const [content, setContent] = useState(<Home />);

      return (
        <Routes>
          <Route path="/question1" element={<validTest1 setUser={setUser} setAnswer={setAnswer} setQuestion={setQuestion} setContent={setContent} />} />
          <Route path="/question2" element={<validTest2 setUser={setUser} setAnswer={setAnswer} setQuestion={setQuestion} setContent={setContent} />} />
          <Route path="/question3" element={<validTest3 setUser={setUser} setAnswer={setAnswer} setQuestion={setQuestion} setContent={setContent} />} />
        </Routes>
      );
    }
  );
}

export default App;
