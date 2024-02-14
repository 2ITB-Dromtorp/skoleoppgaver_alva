const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.post('/submit-answer', (req, res) => {
  const { question, answer } = req.body;
  console.log(`Question: ${question}, Answer: ${answer}`);
  res.status(200).json({ message: 'Answer submitted successfully' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
