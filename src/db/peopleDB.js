// neste arquivo vamos agrupar todas as operações SQL relacionadas a tabela people

// importamos a conexão com o mysql
const connection = require('./connection');

// função insert para receber como parâmetro um objeto person. Nela escrevemos o código referente a um INSERT no banco de dados. Então, chamamos a função conn.execute()
// Esses símbolos de interrogação são chamados de placeholders (ou marcadores, em português). Sua função é de justamente marcar os locais que serão substituídas pelos valores dentro da consulta SQL.
// os placeholders serão substituídos pelos valores do array seguindo a mesma ordem nos quais eles foram declarados, ou seja, o primeiro placeholder será substituído pelo primeiro valor do array; o segundo placeholder será substituído pelo valor do segundo valor do array e assim sucessivamente até o último

const insert = (person) => connection.execute(
  `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
);

module.exports = {
  insert,
};