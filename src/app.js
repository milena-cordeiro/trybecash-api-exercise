const express = require('express');

const app = express();

app.use(express.json());

app.get('/people', (req, res) => {
  res.json({ message: 'trista' });
});

module.exports = app;