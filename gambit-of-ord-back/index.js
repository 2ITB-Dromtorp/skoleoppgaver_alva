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

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.post('/additem', (req, res) => {
  const { newCharacter, newSexuality, newUser } = req.body;
  const sqlQuery = 'INSERT INTO data (`Character`, Sexuality, `User`) VALUES (?, ?, ?)';

  connection.query(sqlQuery, [newCharacter, newSexuality, newUser], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
