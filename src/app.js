const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

// Adicionamos esse middleware definindo que toda requisição em que o path comece com /people seja encaminhada para o router exportado na linha 2.
app.use('/people', peopleRoutes);

// app.get('/people', (req, res) => {
//   res.json({ message: 'trista' });
// });

module.exports = app;