const express = require('express');
const routes =  express.Router();

const PessoaController = require('./controllers/PessoaController.js');

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.cadastrar);


module.exports = routes;