const Vendedor = require('../models/Vendedor');

module.exports = {
    async index(req, res) {
        const vendedores = await Vendedor.findAll();

        return res.json(vendedores);
    },

    async store(req, res) { 
        const { name, email } = req.body;

        const vendedor = await Vendedor.create({ name, email });

        return res.json(vendedor);
    }
};