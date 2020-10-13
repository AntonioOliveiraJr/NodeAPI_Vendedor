const { Model, DataTypes } = require('sequelize');

class Venda extends Model {
    static init(sequelize) {
        super.init({
            valor: DataTypes.DOUBLE,
            comissao: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }

    static associate(models) { 
        this.belongsTo(models.Vendedor, { foreignKey: 'vendedor_id', as: 'vendedor' }) 
    }
}

module.exports = Venda;