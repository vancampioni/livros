module.exports = {
    indexController,
}

function indexController(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json('Rota Raiz Encontrada!')
}