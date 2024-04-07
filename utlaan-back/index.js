const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors);
app.use(express.json());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dromtorp-utlaan',
});

app.get('/logIn', (request, response) => {
    const { newUsername, newPassword } = req.body;

    if (newUsername)
    connection.query('SELECT')
})

app.get('/getLoginData', (request, response) => {
  connection.query('SELECT `students`.`studentUsername`, `students`.`studentPassword`, `students`.`classID`, `classes`.`teacherID`, `teachers`.`teacherUsername`, `teachers`.`teacherPassword` FROM `students` LEFT JOIN `classes` ON `students`.`classID` = `classes`.`classID` LEFT JOIN `teachers` ON `classes`.`teacherID` = `teachers`.`teacherID`', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

app.get('/getStorageData', (request, response) => {
    connection.query('SELECT `students`.`studentUsername`, `students`.`studentPassword`, `students`.`classID`, `classes`.`teacherID`, `teachers`.`teacherUsername`, `teachers`.`teacherPassword` FROM `students` LEFT JOIN `classes` ON `students`.`classID` = `classes`.`classID` LEFT JOIN `teachers` ON `classes`.`teacherID` = `teachers`.`teacherID`', function (error, results, fields) {
      if (error) throw error;
      response.send(JSON.stringify(results));
    });
  });

app.post('/loanItem', (req, res) => {
  
  const { newStudent, newEquipment, newTeacher, newTimestamp } = req.body;

      const sqlQuery = 'INSERT INTO data (`studentID`, `equipmentID`, `teacherID`, `lendingDate`) VALUES ( ?, ?, ?, ?)';

      connection.query(sqlQuery, [ newStudent, newEquipment, newTeacher, newTimestamp ], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});