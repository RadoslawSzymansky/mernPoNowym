const express = require("express")
const router = express.Router();

// Item Model
const Item = require('../../models/Item')

// @route GET api/items
// @desc Get All Items
// @access Public
// to ten endpint jak tylko slash
router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items))
})


// @route POST api/items
// @desc create A item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})
/// I PO TYM JUZ JEST NA BAZIE DANYCH MONGO DB!!!!!!!
// sprawdzic w post w postman, headers , type json i body raw ustawic nasze name


// @route DELETE api/items/:id
// @desc delete A ITEM
// @access Public
// /:id czyli wszystko co po sciezce api/items/ to bedzie tu
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }))
})


// jak default w ES6
module.exports = router