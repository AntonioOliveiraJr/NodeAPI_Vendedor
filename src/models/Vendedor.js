const { Model, DataTypes } = require('sequelize');

class Vendedor extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'vendedores',
        })
    }

    static associate(models) { 
        this.hasMany(models.Venda, { foreignKey: 'vendedor_id', as: 'vendas' }) 
    }

}

module.exports = Vendedor;