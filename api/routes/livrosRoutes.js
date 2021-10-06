const controllerLivros = require('../controllers/livrosController.js');

server.get('/livros', controllerLivros.livrosMenu);

server.get('/livros/listar', controllerLivros.livrosGetAll);