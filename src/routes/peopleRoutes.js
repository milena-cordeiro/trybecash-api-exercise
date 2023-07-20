// No trecho de código acima, estamos criando o endpoint POST /. No corpo da requisição é esperado um arquivo JSON (o mesmo que definimos no teste de integração) e simplesmente retornamos o mesmo JSON como resposta, cujo código de estado é igual a 201.

const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;

  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

module.exports = router;