const express = require('express');
const VendedorController = require('./controllers/VendedorController');
const VendaController = require('./controllers/VendaController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'Word' })
})

// Rotas ara Vendedor
routes.get('/vendedores', VendedorController.index);
routes.post('/vendedores', VendedorController.store);

// Rotas para Venda
routes.get('/vendedores/:vendedor_id/venda', VendaController.index);
routes.post('/vendedores/:vendedor_id/venda', VendaController.store);

module.exports = routes;