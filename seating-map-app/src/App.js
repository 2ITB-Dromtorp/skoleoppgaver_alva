import React, {useState, useEffect} from 'react';
import students from './students';
import styles from './App.css';

const student = ["Matheo", "Elias", "Johannes", "Kristoffer","Vetle", "Axel", "Silas", "Alva", "Mattis", "Gabriel", "Theodor", "-", "Philip", "Ahmad", "Andreas"];

const shuffleArray = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array;
}; 

function assign() {
  shuffleArray(student);
}

const SeatingMap = () => {
  return (
        <html>
          <body>
            <div class="seating-map">
              <div class="column">
              <div class="row">
                <div class="seat">{student[0]}</div>
                <div class="seat">{student[1]}</div>
                <div class="seat">{student[2]}</div>
              </div>
              <div class="row">
                <div class="seat">{student[3]}</div>
                <div class="seat">{student[4]}</div>
                <div class="seat">{student[5]}</div>
              </div>
              <div class="row">
                <div class="seat">{student[6]}</div>
                <div class="seat">{student[7]}</div>
                <div class="seat">{student[8]}</div>
              </div>
              </div>
              <div class="column">
              <div class="row">
                <div class="seat">{student[9]}</div>
                <div class="seat">{student[10]}</div>
              </div>
              <div class="row">
                <div class="seat">{student[11]}</div>
                <div class="seat">{student[12]}</div>
              </div>
              <div class="row">
                <div class="seat">{student[13]}</div>
                <div class="seat">{student[14]}</div>
              </div>
            </div>
            </div>
            <div id='box'>
            <button id='button' onClick={assign}>Randomize</button>
            </div>
          </body>
        </html>
  );
};

export default SeatingMap;