const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());

app.use(express.json());

const answers = JSON.parse(fs.readFileSync('answers.json'));

app.post('/checkAnswer', (req, res) => {
  const questionId = req.body.questionId;
  const selectedAnswer = req.body.selectedAnswer;

  const correctAnswer = answers.questions.find(question => question.id === questionId).correctAnswer;

  const isCorrect = selectedAnswer === correctAnswer;

  res.json({ isCorrect });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
