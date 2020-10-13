const Vendedor = require('../models/Vendedor');
const Venda = require('../models/Venda');

module.exports = {
    async index(req, res) { 
        const { vendedor_id } = req.params;
        
        const vendedor = await Vendedor.findByPk(vendedor_id, {
            include: { association: 'vendas' } 
        });
        return res.json(vendedor);
    },

    async store(req, res) { 
        const { vendedor_id } = req.params;
        const { valor } = req.body;

        const vendedor = await Vendedor.findByPk(vendedor_id);

        if(!vendedor) { 
            return res.status(400).json({ error: 'Vendedor não encotrado!' });
        }

        const comissao = valor * 0.085;

        const venda = await Venda.create({
            valor,
            comissao,
            vendedor_id,
        });

        return res.json(venda);
    }
};