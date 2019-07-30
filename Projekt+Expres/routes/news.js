// express wywoluje w kazdym tym /

const express = require('express');
const router = express.Router();
const News = require('../models/news');
// jak zrobimy teraz metode post na / to bedzie 404 bo nie przechwyujemy tutaj takej metody

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(req.query)  // te zapranie query np search=aaaaa to aaaaa
    const search = req.query.search || "";
    // calback czyli to co po przechwyceniu requestu

    // wyszukiwanie z req expressions
    // tutaj sort i find jest nadpisane z mongoosa z dokumentacji
    const findNews= News
        .find({title: new RegExp(search.trim(), 'i')})
        .sort({created: -1})

    // to samo co callback  w find ale tu po sortowaniu
    findNews.exec((err, data)=>{
        res.render('news', {title: 'News', data, search})
        })
    // index to nazwa szablonu czyli tutaj index pug, drui praramet - obiekt. parametry przekazywane do szablony
    // res.render('news', { title: 'News' });
});

module.exports = router;
