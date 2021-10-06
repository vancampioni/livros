const autoresModel = require('../models/autoresModel.js');

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo
}

function autoresMenu(req, res) {
    console.log('Rota Autores Encontrada!')
    res.json('Rota Autores Encontrada!')
}

function autoresGetAll(req, res) {
    console.log('Listar Autores {M O D E L}')
    //res.json('Listar Autores {M O D E L}')
    autoresModel.getAllAutores(function(err, resposta) {
        console.log('Retorno de Autores { M O D E L}');
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    });
}

function autoresGetById(req, res) {
    console.log('Consultar Autores {M O D E L}')
    const id = req.params.codigo;
    console.log('Parâmetro Esperado: ' + id);
    autoresModel.getByIdAutores(id, function(err, resposta) {
        console.log('Retorno de Autores { M O D E L}\n', resposta);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    });
}

function autoresAtivoInativo(req, res) {
    console.log('Ativar/Inativar Autores {M O D E L}')
    const id = req.params.codigo;
    var p_ativo = '';
    console.log('Parâmetro Esperado: ' + id);
    autoresModel.getByIdAutores(id, function(err, resposta) {
        console.log('Retorno de Autores Ativo/Inativo: ', resposta[0].aut_ativoinativo);
        p_ativo = resposta[0].aut_ativoinativo;
        if(err) {
            throw err;
        } else {
            if(p_ativo == 'A') {
                p_ativo = "I";
            } else if(p_ativo = 'I'){
                p_ativo = "A";
            }
            res.json(resposta);
        };
        console.log('A/I: ' + p_ativo);
        autoresModel.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err;
            } else {
                console.log('Registro Atualizado!!!');
                res.redirect('/autores/consultar/' + id);
            }
        });
    });
}