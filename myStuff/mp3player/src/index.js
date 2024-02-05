import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/customize-progress-bar.css';
import App from './App.js';
import Audioplayer from './components/Audioplayer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Audioplayer />
  </React.StrictMode>
);