const Sequelize = require('sequelize');

const sequelize = new Sequelize ('interSecretaria', 'root', 'Carol120599', {dialect: 'mysql', host: 'localhost', port:3306});
//const sequelize = new Sequelize ('interSecretaria', 'root', 'Carol120599', {dialect: 'mysql', host: 'localhost', port:3306});
//                                nomeBAnco, usuario, senha, { linguagemBD, host, porta}

module.exports = {sequelize};