// express wywoluje w kazdym tym /

const express = require('express');
const router = express.Router();
const login = 'login';
const password = 'password'

// jak zrobimy teraz metode post na / to bedzie 404 bo nie przechwyujemy tutaj takej metody

/* GET home page. */
router.get('/', (req, res, next) => {
  // calback czyli to co po przechwyceniu requestu

  // index to nazwa szablonu czyli tutaj index pug, drui praramet - obiekt. parametry przekazywane do szablony
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  const {body} = req;
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res, next) => {
  // tu jest to co wysyla formularz (formualrz bez action domyslnie tu wysylaa)
  const {body} = req;
  if (login === body.login && body.password === password) {
    // sesja z cokkie
    req.session.admin = 1;
    res.redirect('/admin')
  } else{
    res.redirect('/login')
  }
  //przekirowanie
});


module.exports = router;
