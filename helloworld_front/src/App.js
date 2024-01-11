import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TopNav from './header';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav  />} />  
    </Routes>
  );
};