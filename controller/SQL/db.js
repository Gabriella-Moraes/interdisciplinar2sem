async function connect(){
    //confirma se está conectado com a variavel global
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    //const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/interSecretaria");
    const connection = await mysql.createConnection("mysql://root:teste1@localhost:3306/interSecretaria");
    //const connection = await mysql.createConnection("mysql://root:Carol120599@localhost:3306/interSecretaria");
    console.log("conectou no MySQL");
    global.connection = connection;
    return connection;
}

module.exports = {connect};
