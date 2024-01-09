'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;
const app = express();

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/rolldice', (req, res) => {
  const number = getRandomNumber(1, 6);

  res.json({ status: 'ok', number });
});

app.use('/api/greeting', (req, res) => {
  const name = req.query ? req.query.name : undefined;
  res.send({ content: `Hello, ${name || 'World!'}` });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
