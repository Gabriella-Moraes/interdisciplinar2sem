const Sequelize = require("sequelize");
const database = require("./dborm.js");

const Usuario = database.sequelize.define("usuario", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  endereco: Sequelize.STRING,
});

module.exports = { Cliente };
