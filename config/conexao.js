var mysql = require('mysql2');
var database = 'dados212n';

// Instanciar obj de acesso ao banco de dados
var conexao = mysql.createConnection({
    user: 'root',
    password: 'Torg@sk*1',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if (err) {
    console.log('Erro ao conectar ao mysql...', err);
    return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!');
});

module.exports = conexao;