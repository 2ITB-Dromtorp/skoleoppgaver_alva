import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TopNav from './header';
import Attchart from './components/attchart';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav  />} />  
      <Route path="/attchart" element={<Attchart  />} />  
      <Route path="/chachart" element={<chachart  />} />  
    </Routes>
  );
};