const express = require('express');
const mysql = require('mysql');
const { faker } = require("@faker-js/faker")
const app = express();
const PORT = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "appdb"
}
const connection = mysql.createConnection(config);
app.get('/', (req, res) => {
  const name = faker.person.firstName();
  connection.query(`INSERT INTO people(name) values('${name}')`);
  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results?.length ? results.map(el => `<li>${el.name}</li>`).join('') : `<li>${name}</li>`}
      </ol>
    `)
  })
})
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})