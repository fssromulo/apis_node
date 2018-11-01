const objConexao = require('../models/Conexao.js');

module.exports = {
	index (req, res) {
		objConexao.query(
			'SELECT * FROM pessoas',
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				// console.log('The solution is: ', results[0].solution);
		});
	},
	cadastrar (req, res)  {
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
	}
};