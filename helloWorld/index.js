const express = require('express')
const app = express()
const port = 3001
var mysql = require('mysql');
var cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mariokart-data'
});

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get('/', (request, response) => {
  connection.query('SELECT * FROM data', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

app.post('/additem', (request, response) => {
  const { itemName, itemDescription } = request.body;

  let sqlQuery = 'INSERT INTO data (name, description) VALUES (?, ?)';

  connection.query(sqlQuery, [itemName, itemDescription], function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})