import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/customize-progress-bar.css';
import AudioPlayer from './components/Audioplayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AudioPlayer />
  </React.StrictMode>
);
