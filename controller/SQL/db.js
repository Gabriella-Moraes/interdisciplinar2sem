async function connect(){
    //confirma se está conectado com a variavel global
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    //const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/interSecretaria");
<<<<<<< HEAD
    const connection = await mysql.createConnection("mysql://root:teste1@localhost:3306/interSecretaria");
    //const connection = await mysql.createConnection("mysql://root:Carol120599@localhost:3306/interSecretaria");
=======
    const connection = await mysql.createConnection("mysql://root:Carol120599@localhost:3306/interSecretaria");
>>>>>>> 7977c03bd50ef7d6d7e6f2d9fe9bc400675ea121
    console.log("conectou no MySQL");
    global.connection = connection;
    return connection;
}

module.exports = {connect};
