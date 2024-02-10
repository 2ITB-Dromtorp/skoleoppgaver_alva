const express = require('express')
const app = express()
const port = 3001
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/getCharacterData', (req, res) => {
  const selectedCharacter = req.query.character;

  const query = `
    SELECT Sexuality, COUNT(*) as Count
    FROM data
    WHERE Character = ?
    GROUP BY Sexuality;
  `;

  connection.query(query, [selectedCharacter], (error, results) => {
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
