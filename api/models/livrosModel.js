var conexao = require('../../config/conexao.js');

module.exports = {
    getAllLivros
};

function getAllLivros(callback) {
    conexao.query('select liv_codigo, liv_titulo, liv_edicao, liv_isbn, liv_ano, aut_nome, edt_nome from livros as l ' +
	'inner join editoras as e ' + 
		' on l.liv_codigo = e.edt_codigo ' +
	'inner join autores as a ' +
    'on a.aut_codigo = l.liv_codigo', callback);
};

