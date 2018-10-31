const mysql = require("mysql");

const objConexao = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'ci_teste'
});

objConexao.connect(function (err) {
   if (err) {
      console.error('error connecting: ' + err.stack);
      return;
   }
   console.log('connected as id ' + objConexao.threadId);
}) ;

const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req, res) => {
   objConexao.query('SELECT * FROM pessoas', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      // console.log('The solution is: ', results[0].solution);
   });
});

app.post('/inserir',(req, res) => {

   // var objPessoaInserir  = {
   //    nm_pessoa: 'Pessoa Cadastrada VIA API!',
   //    fone: '(47)991725457',
   //    email: 'emailVindoDaApi@gmail.com',
   // };

   var objPessoaInserir = req.body;

   console.log(objPessoaInserir);

   var query = objConexao.query(
      'INSERT INTO pessoas SET ?',
      objPessoaInserir,
      function (error, results, fields) {
         if (error) throw error;
         res.send(results);
         console.log(query.sql);
      }
   );


});


app.listen(3001);