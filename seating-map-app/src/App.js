import styles from './App.css';
import React, { useState } from 'react';

const OGarray = ["Matheo", "Elias", "Johannes", "Kristoffer", "Vetle", "Axel", "Silas", "Alva", "Mattis", "Gabriel", "Theodor", "-", "Philip", "Ahmad", "Andreas"];

function shuffleArray(array) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function Assign() {
  const [Students, setStudents] = useState(shuffleArray(OGarray));
  const [ButtonClicked, setButtonClicked] = useState(false);
  const [Save, setSave] = useState(Students)

  const handleShuffle = () => {
    setStudents(shuffleArray(OGarray));
    setSave(Students);
    setButtonClicked(true);
    console.log(Save);
  };

  const handleReset = () => {
    setStudents(["Matheo", "Elias", "Johannes", "Kristoffer", "Vetle", "Axel", "Silas", "Alva", "Mattis", "Gabriel", "Theodor", "-", "Philip", "Ahmad", "Andreas"]);
  };

  const handleSave = () => {
    setSave(Students);
  }

  const handleLoadSave = () => {
    setStudents(Save);
  }

  return (
    <html>
    <div className="seating-map">
      <div class="column">
              <div class="row">
                <div class="seat">{Students[0]}</div>
                <div class="seat">{Students[1]}</div>
                <div class="seat">{Students[2]}</div>
              </div>
              <div class="row">
                <div class="seat">{Students[3]}</div>
                <div class="seat">{Students[4]}</div>
                <div class="seat">{Students[5]}</div>
              </div>
              <div class="row">
                <div class="seat">{Students[6]}</div>
                <div class="seat">{Students[7]}</div>
                <div class="seat">{Students[8]}</div>
              </div>
              </div>
              <div class="column">
              <div class="row">
                <div class="seat">{Students[9]}</div>
                <div class="seat">{Students[10]}</div>
              </div>
              <div class="row">
                <div class="seat">{Students[11]}</div>
                <div class="seat">{Students[12]}</div>
              </div>
              <div class="row">
                <div class="seat">{Students[13]}</div>
                <div class="seat">{Students[14]}</div>
              </div>
            </div>
            </div>
            <div id='box'>
              {!ButtonClicked && (
                <button id='button' onClick={handleShuffle}>Randomize</button>
              )}
              {ButtonClicked && (
                <button id='button'>Gone :)</button>
              )}
            <button id='button' onClick={handleReset}>Original Map</button>
            <button id='button' onClick={handleSave}>Save</button>
            <button id='button' onClick={handleLoadSave}>Load Save</button>
      </div>
    </html>
  );
}

export default Assign;