var sequelize = require("sequelize")
var banco  = require("../Servico_E_Banco/banco_config")

var cliente = banco.define("cliente", {
    idcliente: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: { 
        type: sequelize.STRING(12),
        allowNull: false,
    },
    cpf: {
        type: sequelize.STRING(12),
        allowNull: false,   
    }, 
    email: {
        type: sequelize.STRING(45),
        allowNull: false,
        
    }
})

module.exports = cliente;
