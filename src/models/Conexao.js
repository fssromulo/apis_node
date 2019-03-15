const mysql = require("mysql");

const objConexao = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'api_node_vue'
});

objConexao.connect(function (err) {
   if (err) {
      console.error('error connecting: ' + err.stack);
      return;
   }
   console.log('connected as id ' + objConexao.threadId);
}) ;


module.exports = objConexao;