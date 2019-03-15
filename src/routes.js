const express = require('express');
const routes =  express.Router();

const PessoaController = require('./controllers/PessoaController');

routes.get('/pessoa', PessoaController.getPessoas); // Recupera todas as pessoas
routes.get('/pessoa/:cd_pessoa', PessoaController.getPessoa); // Recupera uma pessoa especifica
routes.post('/pessoa', PessoaController.cadastrar);
routes.put('/pessoa/:cd_pessoa', PessoaController.atualizar);
routes.delete('/pessoa/:cd_pessoa', PessoaController.apagar);

module.exports = routes;