const express = require('express');
const path = require('path');
const gameRoutes = require('./routes/game');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Uruchomiano na porcie: ', PORT)
});

app.use(express.static(path.join(__dirname, 'public')));


gameRoutes(app);



