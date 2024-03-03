const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(express.json());

const answers = JSON.parse(fs.readFileSync('answers.json'));
const questions = JSON.parse(fs.readFileSync('questions.json'));

app.post('/checkPage', (req, res) => {
  const questionId = req.body.questionId;
  const selectedAnswer = req.body.selectedAnswer;

  const pageQuestion = questions.questions.find(question => question.id === questionId).pageQuestion;
  const question1 = questions.questions.find(question => question.id === questionId).question1;
  const question2 = questions.questions.find(question => question.id === questionId).question2;
  const question3 = questions.questions.find(question => question.id === questionId).question3;
  const question4 = questions.questions.find(question => question.id === questionId).question4;

  res.json({ pageQuestion, question1, question2, question3, question4 });
});

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
