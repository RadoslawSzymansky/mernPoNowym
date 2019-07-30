// express wywoluje w kazdym tym /
const
const express = require('express');
const router = express.Router();
const News = require('../models/news');
// jak zrobimy teraz metode post na / to bedzie 404 bo nie przechwyujemy tutaj takej metody

/* GET home page. */
router.get('/', (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || -1;
  const findNews = News
    .find({ title: new RegExp(search.trim(), 'i') })
    .sort({ created: sort })

  findNews.exec((err, data) => {
    res.json(data)
  })

});

// jak ktos wpisze strona/api/number id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  const findNews = News
    .findById(id)
    // .select('id', 'title') gdybysmy chcieli tylko niektore z nich ortzymac a nie cale obiekty
  findNews.exec((err, data) => {
    res.json(data)
  })

});


module.exports = router;
