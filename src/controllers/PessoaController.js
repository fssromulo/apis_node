const objConexao = require('../models/Conexao.js');

module.exports = {
	getPessoas (req, res) {
		objConexao.query(
			'SELECT * FROM pessoas',
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				// console.log('The solution is: ', results[0].solution);
		});
	},
	getPessoa (req, res) {
		
		objConexao.query(
			'SELECT * FROM pessoas WHERE cd_pessoa = ?',
			[req.params.cd_pessoa],
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				// console.log('The solution is: ', results[0].solution);
		});
	},
	cadastrar (req, res)  {
		let objPessoa = req.body;
		// console.log(objPessoa);

		let query = objConexao.query(
			'INSERT INTO pessoas SET ?',
			objPessoa,
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				console.log(query.sql);
			}
		);
	},
	atualizar(req, res) {
		let objPessoa = req.body;
		let query = objConexao.query(
			'UPDATE pessoas SET nm_pessoa = ?, email = ?, fone = ? WHERE cd_pessoa = ?',
			[
				objPessoa.nm_pessoa,
				objPessoa.email,
				objPessoa.fone,
				req.params.cd_pessoa
			],
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				console.log(query.sql);
			}
		);
	},
	apagar(req,res) {
		// let objPessoa = req.body;
		let query = objConexao.query(
			'DELETE FROM pessoas WHERE cd_pessoa = ?',
			[req.params.cd_pessoa],
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				console.log(query.sql);
			}
		);
	}
};