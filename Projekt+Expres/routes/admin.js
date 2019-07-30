// express wywoluje w kazdym tym /

const express = require('express');
const router = express.Router();

// modele z duzej!
const News = require('../models/news.js');
// ten router odapli sie przy kazda metode i kazdy adres

router.all('*',(req, res, next)=>{
    // sprawdzam czy istnieje    sesja taka a jak nie to spowrtorem na login
    if (!req.session.admin) {
        res.redirect('/login')
        // uwazac bo next po redirect by blad waywalil
        return
    }

    next();
})
// sesje to cookiersy z flaga http

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(req.session.admin)
    // const newsData = new News({
    //     title: 'Tytul testowy',
    //     description: 'Opis'
    // })
    // newsData.save(err=>{
    //     console.log(err)
    // })
    // calback czyli to co po przechwyceniu requestu
    // metoda find pobieraa artykuly 
    // ma rozne parametry 
    const data = News.find({}, (err, data) =>{
        console.log(data)
        res.render('admin/index', { title: 'Dodaj news', data })
    })

    // index to nazwa szablonu czyli tutaj index pug, drui praramet - obiekt. parametry przekazywane do szablony
    // res.render('admin/index', { title: 'Admin' });
});
router.get('/news/add', (req, res) =>{
    res.render('admin/news-form', {title: 'Dodaj news', body: {}})
})
router.post('/news/add', (req, res) => {
    const body = req.body;
    const newsData = new News(body);
    // bledy z tego co require dalismy itp
    // console.log(errors)
    // walidacje, w mongoose dokumentacji
    const errors = newsData.validateSync();
    console.log( req)
    newsData.save(err=>{
        if (err) {
            res.render('admin/news-form', { title: 'Dodaj news', errors, body })
        }else {
            res.redirect('/admin')
        }
    })
    // res.render('admin/news-form', { title: 'Dodaj news' , errors, body})
})

// id dodatkowy parametr/ po :  tworzy sie nazwa . Pobieramy ja z poziou routingu i na podtsaiwe id usuwamy za pomoca mongoosa
router.get('/news/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id, (err)=> {
        if (err) console.log(err)
        res.redirect('/admin')
    })
})

module.exports = router;
