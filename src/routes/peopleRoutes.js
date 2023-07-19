// No trecho de código acima, estamos criando o endpoint POST /. No corpo da requisição é esperado um arquivo JSON (o mesmo que definimos no teste de integração) e simplesmente retornamos o mesmo JSON como resposta, cujo código de estado é igual a 201.

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const person = req.body;
  res.status(201).json(person);
});

module.exports = router;