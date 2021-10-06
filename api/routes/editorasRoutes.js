const controllerEditoras = require('../controllers/editorasController.js');

server.get('/editoras', controllerEditoras.editorasMenu);