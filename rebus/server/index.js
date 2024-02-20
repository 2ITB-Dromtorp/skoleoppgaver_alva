const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Load the answers from the JSON file
const answers = JSON.parse(fs.readFileSync('answers.json'));

// Route for checking answers
app.post('/checkAnswer', (req, res) => {
  const questionId = req.body.questionId;
  const selectedAnswer = req.body.selectedAnswer;

  // Find the correct answer for the given question ID
  const correctAnswer = answers.questions.find(question => question.id === questionId).correctAnswer;

  // Check if the selected answer matches the correct answer
  const isCorrect = selectedAnswer === correctAnswer;

  res.json({ isCorrect });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
