const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dromtorp-utlaan',
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

app.post('/logIn', async (req, res) => {
    const { newUsername, newPassword } = req.body;
    
    if (newUsername && newPassword) {
        connection.query('SELECT userID, userPassword FROM students LEFT JOIN userTypes on userTypes.userTypeID = students.userTypeID WHERE userUsername = ?', [newUsername], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(400).json({ error: 'Internal Server Error' });
            } else {
                if (results.length>0) {
                    const user = results[0]

                    if (await bcrypt.compare(newPassword, user.password)) {
                        res.status(200).send({ error: "vjbujsiedfjdreyhgfd"})
                    } else {
                        res.status(401).send({ error: 'wrong username and/or password' })
                    }
                } else {
                    res.status(401).send({ error: 'wrong username and/or password' })
                }
            }
        });
    } else {
        res.status(401).send({ error: 'damn' })
    }
});

app.get('/getStorageData', (request, response) => {
    connection.query('SELECT `lending`.`lendingID`, `lending`.`studentID`, `lending`.`equipmentID`, `lending`.`teacherID`, `lending`.`lendingDate`, `lending`.`returnDate`, `equipmenttype`.`equipmentType`, `equipmentmodel`.`equipmentModel`, `students`.`userFname`, `students`.`userLname`, `classes`.`className`, `classes`.`teacherID` FROM `lending` LEFT JOIN `equipment` ON `lending`.`equipmentID` = `equipment`.`equipmentID` LEFT JOIN `equipmentType` ON `equipment`.`equipmentTypeID` = `equipmentType`.`equipmentTypeID` LEFT JOIN `equipmentModel` ON `equipment`.`equipmentModelID` = `equipmentModel`.`equipmentModelID` LEFT JOIN `students` ON `lending`.`studentID` = `students`.`userID` Left JOIN `classes` ON `students`.`classID` = `classes`.`classID`', function (error, results, fields) {
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