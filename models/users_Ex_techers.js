const Sequelize = require("sequelize");
const db = require("../configs/db")

const user = db.define("user", {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }, 
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    pass: {
        type: Sequelize.STRING(20),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = user;