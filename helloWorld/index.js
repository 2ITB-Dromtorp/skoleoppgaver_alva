const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

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
  database: 'mariokart-data',
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/getCharacterData', (request, response) => {
  connection.query('SELECT `data`.`ID`, `data`.`User`, `data`.`attdataID`, `att-data`.`Att`, `data`.`chadataID`, `character-data`.`Char` FROM `data` LEFT JOIN `character-data` ON `data`.`chadataID` = `character-data`.`ID` LEFT JOIN `att-data` ON `data`.`attdataID` = `att-data`.`ID`', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

app.post('/additem', (req, res) => {
  
  const { newCharacter, newSexuality, newUser } = req.body;

  connection.query('SELECT ID FROM `att-data` WHERE `att-data`.Att = ? ', [ newSexuality ], function (error, resultsAtt, fields) {
    if (error) throw error;  

    connection.query('SELECT ID FROM `character-data` WHERE `character-data`.Char = ? ', [ newCharacter ], function (error, resultsChar, fields) {
      if (error) throw error;

      console.log(resultsChar[0].ID, resultsAtt[0].ID)

      const sqlQuery = 'INSERT INTO data (`User`, `attdataID`, `chadataID` ) VALUES ( ?, ?, ?)';

      connection.query(sqlQuery, [ newUser, resultsAtt[0].ID, resultsChar[0].ID ], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});