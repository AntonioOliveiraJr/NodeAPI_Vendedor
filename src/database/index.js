const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Vendedor = require('../models/Vendedor');
const Venda = require('../models/Venda');

const connection = new Sequelize(dbConfig);

Vendedor.init(connection); 
Venda.init(connection);

Vendedor.associate(connection.models);
Venda.associate(connection.models);

module.exports = connection;