const livrosModel = require('../models/livrosModel.js');

module.exports = {
    livrosMenu,
    livrosGetAll
}

function livrosMenu(req, res) {
    console.log('Rota Livros Encontrada!')
    res.json('Rota Livros Encontrada!')
}

function livrosGetAll(req, res) {
    console.log('Listar Livros {M O D E L}')
    livrosModel.getAllLivros(function(err, resposta) {
        console.log('Retorno de Livros { M O D E L}');
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    });
}


