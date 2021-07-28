var sequelize = require("sequelize")

var conexao  = new sequelize("API", "root", "777",{
    host:"localhost",
    dialect:"mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Servidor rodando....")
    }
).catch(
    function(erro){
        console.log("Erro ao se conectar.ERRO: "+erro)
}
)
module.exports = conexao 
