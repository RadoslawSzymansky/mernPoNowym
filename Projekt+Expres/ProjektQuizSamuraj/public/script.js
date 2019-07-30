const question = document.querySelector('#question');
const gameBoard = document.querySelector('#gameBoard');
const h2 = document.querySelector('h2');
const tip = document.querySelector('#tip');
const btnCallFriend = document.querySelector('#callToAFriend');
const btnHalf = document.querySelector('#halfOnHalf');
const btnCrowd = document.querySelector('#questionToTheCrowd');

function fillQuestionsElements(data) {

  if (data.winner === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Wygrałeś';
    return;
  };

  if (data.loser === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Przegrana, sprobuj jeszcze raz';
    return;
  };

  question.innerText = data.question;

  for(const i in data.answers) {
    const ansEl =  document.querySelector(`#answer${ parseInt(i) + 1 }`);
    ansEl.innerText = data.answers[i];
  };
};

function showNextQuestion() {
  
  fetch('question', {
    method: 'GET'
  }).then(r => r.json()).then(data => {
    fillQuestionsElements(data);
  });

};
showNextQuestion();


function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, {
    method: 'POST'
  }).then(res=> res.json()).then(data => {
    console.log(data)
    handleAnswerFeedback(data);
  });
};

const answerButtons = document.querySelectorAll('.btnQuestion');

for(const button of answerButtons) {
  button.addEventListener('click', e => {
    const answerIndex = e.target.dataset.answer;
    sendAnswer(answerIndex);
  });
};
const goodAnswersSpan = document.querySelector('#good-answers');

function handleAnswerFeedback(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNextQuestion();
};

function callToAFriend() {
  console.log('dzialam')
  fetch('/help/friend', {
    method: 'GET'
  }).then(r => r.json()).then(data => {
    console.log(data)
    tip.innerText = data.text;
  });

};
btnCallFriend.addEventListener('click', callToAFriend)

function askCrowd() {
  console.log('dzialam')
  fetch('/help/crowd', {
    method: 'GET'
  }).then(r => r.json()).then(data => {
    console.log(data)
    if (typeof data.text === 'string') {
      tip.innerText = data.text;
    } else {
      data.chart.forEach((e, index) => {
        answerButtons[index].innerText = e + '%'
      })
    };
  });

};
btnCrowd.addEventListener('click', askCrowd)

function halfOnHalf() {

  fetch('/help/half', {
    method: 'GET'
  }).then(r => r.json()).then(data => {
    if(typeof data.text === 'string') {
      tip.innerText = data.text;
    } else {
      answerButtons.forEach(btn=>{ 
        console.log(btn.textContent, data.answersToRemove)
        if (data.answersToRemove.indexOf(btn.innerText) !== -1) {
          btn.textContent = '---';
        };
      });
    };
  });

};
btnHalf.addEventListener('click', halfOnHalf)