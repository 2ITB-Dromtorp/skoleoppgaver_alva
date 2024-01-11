import Homepage from './components/homepage';
import Reporterror from './components/reporterror';
import Faq from './components/faq';
import Termsofservice from './components/termsofservice';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Data from './data/data.json';

function App() {

  console.log(Data)

  return (
    <Routes>
      <Route path="/" element={<Homepage data={Data} />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/terms-of-service" element={<Termsofservice />} />
    </Routes>
  );
}

export default App;
