const objConexao = require('../models/Conexao.js');

let objPessoaController = {
	getPessoas(req, res) {
		objConexao.query(
			'SELECT * FROM pessoas',
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				// console.log('The solution is: ', results[0].solution);
		});
	},
	getPessoa(req, res) {
		objConexao.query(
			'SELECT * FROM pessoas WHERE cd_pessoa = ?',
			[req.params.cd_pessoa],
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
		});
	},
	getLogin(req, res) {
		let objPessoa = req.body;
		objConexao.query(
			'SELECT * FROM pessoas WHERE login = ? AND senha = ?',
			[
				req.params.login,
				req.params.senha
			],
			function (error, results, fields) {
				if (error) throw error;
				res.send(results);
				// console.log('The solution is: ', results[0].solution);
			});
	},
	converteParaSQL(ds_sql_converter) {
		// Necessário para que não coloque entre ASPAS e execute como string ao invés de função
		return {
			toSqlString: () => { return ds_sql_converter; }
		};
	},
	cadastrar(req, res)  {
		let objPessoa = req.body;

		// Necessário para que não coloque entre ASPAS e execute como string ao invés de função
		// let ds_senha = objPessoaController.converteParaSQL(objPessoa.senha);
		let objPessoaSalvar = {
			"nm_pessoa": objPessoa.nm_pessoa,
			"email": objPessoa.email,
			"fone": objPessoa.fone,
			"login": objPessoa.login,
			"senha": objPessoa.senha
		}

		let query = objConexao.query(
			'INSERT INTO pessoas SET ?',
			objPessoaSalvar,
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
			'UPDATE pessoas SET nm_pessoa = ?, email = ?, fone = ?, senha = ?, login = ? WHERE cd_pessoa = ?',
			[
				objPessoa.nm_pessoa,
				objPessoa.email,
				objPessoa.fone,
				objPessoa.senha,
				objPessoa.login,
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

module.exports = objPessoaController;