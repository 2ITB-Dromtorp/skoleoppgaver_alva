const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'no'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM elev', function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});

app.get('/', (request, response) => {
  res.send("why though?")
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results))
  });
})

app.listen(port, () => {
  console.log(`Example hkhlxyiyziu app listening on port ${port}`)
})
