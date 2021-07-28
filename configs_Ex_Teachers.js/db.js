const Sequelize = require("sequelize");

const db = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

db.authenticate().then(function(){
    console.log("Conectado ao banco de dados")
}).catch(function(err){
    console.log("Erro ao se conectar com banco de dados! "+err)
})

module.exports = db;