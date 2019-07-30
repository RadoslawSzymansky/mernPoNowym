// express wywoluje w kazdym tym /

const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz')
// jak zrobimy teraz metode post na / to bedzie 404 bo nie przechwyujemy tutaj takej metody

/* GET home page. */
router.get('/', (req, res, next) => {
    const show = !req.session.vote;
    const quizzes = Quiz.find({}, (err,data) =>{
        let sum = 0;
        data.forEach(e=> sum += e.vote);
        res.render('quiz', { title: 'Quiz', data ,show, sum});
    })
    // calback czyli to co po przechwyceniu requestu
    // index to nazwa szablonu czyli tutaj index pug, drui praramet - obiekt. parametry przekazywane do szablony
});
router.post('/', (req, res, next) =>{
    const id = req.body.quiz;
    console.log(id)
    const quizzes = Quiz.findOne({_id: id}, (err, data) => {
        // tu robimy zmiane na znalezionym :)
        data.vote =  data.vote + 1
        data.save(err=>{
            // daoadnie sejsji 
            req.session.vote = 1;
            res.redirect('/quiz')
        })
    })
})

module.exports = router;
