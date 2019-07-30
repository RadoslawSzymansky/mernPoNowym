function gameRoutes(app) {
  let goodAnswers = 0;
  let callToAFriendUsed = false;
  let questionToTheCrowdUsed = false;
  let halfOnHalfUsed = false;
  let isGameOver = false;

  const questions = [
    {
      question: 'Jaki jest najlepszy język programowania na świecie?',
      answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
      correctAnswer: 2
    },
    {
      question: 'Czy ten kurs jest fajny?',
      answers: ['Tak', 'Nie', 'Najgorszy', 'Najlepszy'],
      correctAnswer: 3
    },
    {
      question: 'Czy lubisz pizze?',
      answers: ['Tak', 'Nie', 'Oczywiście', 'Może'],
      correctAnswer: 0
    },
  ];

  app.get('/question', (req, res) => {
    console.log('questioon')
    if (goodAnswers === questions.length) {

      res.json({
        winner: true
      });

    } else if (isGameOver) {

      res.json({
        loser: true
      });

    } else {

      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;

      res.json({
        question, answers
      });
    };
  });

  app.post('/answer/:index', (req, res) => {
    console.log("answer")
    if (isGameOver) {

      res.json({
        loser: true
      });

      return;
    };

    const {index} = req.params;

    const currentQuestion = questions[goodAnswers];

    const isGoodAnswer = currentQuestion.correctAnswer === Number(index);
    if (isGoodAnswer) {
      goodAnswers++;
    } else {
      isGameOver = true;
    }

    res.json({
      correct: isGoodAnswer,
      goodAnswers
    });
  });

  app.get('/help/friend', (req, res) => {
    console.log('jestem w hekffirend')
    if (callToAFriendUsed) {
      return res.json({
        text: 'To koło ratunkowe było już wykorzystane.'
      });
    } else {
      const doesFriendKnowAnswer = Math.random() < .5;
      const currentQuestion = questions[goodAnswers];

      res.json({
        text: doesFriendKnowAnswer
          ? `Hmm, wydaję mi się że odpowiedź to ${currentQuestion.correctAnswer}`
          : 'Nie jestem pewien..'
      });

      callToAFriendUsed = true;
    };
  });

  app.get('/help/half', (req, res) => {
    if (halfOnHalfUsed) {
      return res.json({
        text: 'To koło ratunkowe było już wykorzystane.'
      });
    } else {
      const currentQuestion = questions[goodAnswers];
      const answersCopy = currentQuestion.answers.filter((s, index) => {
        return index !== currentQuestion.correctAnswer;
      });
      answersCopy.splice(~~(Math.random() * answersCopy.length), 1);
      res.json({
        answersToRemove: answersCopy
      });

      halfOnHalfUsed = true;
    };
  });

  app.get('/help/crowd', (req, res) => {
    const chart = [10, 20, 30, 40];
    const correctAns = questions[goodAnswers].correctAnswer;

    if(questionToTheCrowdUsed) {
      return res.json({
        text: 'To koło ratunkowe było już wykorzystane.'
      });
    }

    for (let i = chart.length - 1 ; i > 0; i--) {
      const change = Math.floor(Math.random() * 20 - 10);
      console.log(change, i , chart[i])
      chart[i] += change;   
      chart[i -1] -= change;
    }
    console.log(chart[3], chart[correctAns])
    const old  = chart[3];
    chart[3] = chart[correctAns];
    chart[correctAns] = old

    res.json({
      chart
    })
    questionToTheCrowdUsed = true;
  });

  
  
};


module.exports = gameRoutes;