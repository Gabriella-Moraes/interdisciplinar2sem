const Sequelize = require("sequelize");
const db = require("./db.js");

const BilheteUnico = db.sequelize.define("form_bilhetes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  rg: {
    type: Sequelize.STRING,
  },
  EMISSAO: {
    type: Sequelize.STRING,
  },
  UF: {
    type: Sequelize.STRING,
  },
  NOME_MAE: {
    type: Sequelize.STRING,
  },
  DATA_NASCIMENTO: {
    STRING: Sequelize.DATE,
  },
  EMAIL: {
    type: Sequelize.STRING,
  },
  TELEFONE: {
    type: Sequelize.STRING,
  },
  CELULAR: {
    type: Sequelize.STRING,
  },
  CEP: {
    type: Sequelize.STRING,
  },
  ENDERECO: {
    type: Sequelize.STRING,
  },

  BAIRRO: {
    type: Sequelize.STRING,
  },
  CIDADE: {
    type: Sequelize.STRING,
  },
  ESTADO: {
    type: Sequelize.STRING,
  },
  COMPLEMENTO: {
    type: Sequelize.STRING,
  },
  CURSO: {
    type: Sequelize.STRING,
  },
  TURNO: {
    type: Sequelize.STRING,
  },
  SEMESTRE: {
    type: Sequelize.STRING,
  },
  DATA_PEDIDO: {
    type: Sequelize.DATE,
  },
  TIPO_TARIFA: {
    type: Sequelize.STRING,
  },

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
BilheteUnico.sync()
module.exports =  BilheteUnico ;