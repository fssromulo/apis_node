const mysql = require("mysql");

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'ci_teste'
});

connection.connect(function (err) {
   if (err) {
      console.error('error connecting: ' + err.stack);
      return;
   }
   console.log('connected as id ' + connection.threadId);
}) ;

const express = require('express');
const app = express();

app.get('/',(req, res) => {
   connection.query('SELECT * FROM pessoas', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      // console.log('The solution is: ', results[0].solution);
   });
});

app.listen(3001);