const express = require('express');
const consign = require('consign');

// Instanciando o servidor express
server = express();

server.set('porta', 3001);

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;