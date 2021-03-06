const express = require("express");
const db = require("./controller/SQL/db.js");
const app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
//npm install ejs
var path = require('path');//serve para manipular pastas
app.set('views', path.join(__dirname, '/view/'));

//npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

//npm i passport express-session
const passport = require('passport');
const session = require('express-session');
require('./model/components/autenticacao')(passport);

app.use(session({
    secret: '12345678', // configure um segredo seu aqui
    resave: false, //salvar cada requisição
    saveUninitialized: false, /// sessoês anônimas
    cookie: { maxAge: 30 * 60 * 1000} //30 min
}))

app.use(passport.initialize());
app.use(passport.session());

//Validação de login do usuário -> a URL listada abaixo está como atributo do form da página Login.ejs
app.post('/login/executar', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/?fail=true'
}));

//npm install consign
var consign = require('consign');
consign().include('controller/routes',).into(app);

//Carregamento de arquivos estáticos
app.use(express.static('view'));
//app.use('/static', express.static(__dirname + '/public'));

//pasta public
app.use(express.static(path.join(__dirname, "public")));


// esta  deve ser a última linha quando usamos express
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});

