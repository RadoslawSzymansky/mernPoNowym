const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items = require('./routes/api/items')

const app = express();

//Bodyparsse Middleware
app.use(bodyParser.json());

//DB config
const db = require(path.resolve(__dirname, 'config', 'keys.js')).mongoURI;
//Connect to MOngoDB
mongoose.connect(db)
    .then(() => {
        console.log("mondoDB connected")
    })
    .catch(err => console.log(err))

// wszystko co z ta sciezka ma isc do api
app.use('/api/items', items)

/// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    //setStatic folder
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server started at port: ', port))