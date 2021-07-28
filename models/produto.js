var sequelize = require("sequelize")
const { default: ModelManager } = require("sequelize/types/lib/model-manager")

var banco = require("./..")

var produto = banco.define("produto",
{
    id_produto:{ 
        type: sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: sequelize.CHAR(45),
        allownull: false,
    },
    preco: {
        type: sequelize.FLOAT(11,10),
        allownull: false,
    },
    //Palavras: Chaves Estrangeiras quando ouver no prjeto
    /* EX=>  
    id: {
        type: ...,
        allownull: ...,
        referernces: { model:" *** ", key:" * * * "}
    } */

})

module.exports = produto 
