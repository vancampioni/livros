var conexao = require('../../config/conexao.js');

module.exports = {
    getAllAutores,
    getByIdAutores,
    autoresAtivoInativo
};

function getAllAutores(callback) {
    conexao.query('select * from autores ', callback);
};

function getByIdAutores(id, callback) {
    conexao.query('select * from autores where aut_codigo = ' + id, callback);
};

function autoresAtivoInativo(id, ativo, callback) {
    console.log('Autores Ativando/Inativando Registro ' + id + ' - Status: ' + ativo);
    const m_sql = "update autores set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";
    console.log(m_sql);
    conexao.log(m_sql, callback);
    console.log("Autores Ativando/Inativando Registro " + id + "- Status " + ativo);
};