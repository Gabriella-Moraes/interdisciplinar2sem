const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app){

    app.get("/", function(req, resp){
        resp.send("Bem-vindo ao meu app");
    })

    app.get('/index', function (req, res){
        res.render('pages/index');
    })

    app.get('/acessibilidade', function (req, res){
        res.render('pages/acessibilidade');
    })
    
    app.get('/analise_e_desenvolvimento_de_sistemas', function (req, res){
        res.render('pages/analise_e_desenvolvimento_de_sistemas');
    })
    
    app.get('/comercio_exterior', function (req, res){
        res.render('pages/comercio_exterior');
    })

    app.get('/desenvolvimento_de_produtos_plasticos', function (req, res){
        res.render('pages/desenvolvimento_de_produtos_plasticos');
    })

    app.get('/desenvolvimento_de_software_multiplataforma', function (req, res){
        res.render('pages/desenvolvimento_de_software_multiplataforma');
    })

    app.get('/gestao_de_recursos_humanos', function (req, res){
        res.render('pages/gestao_de_recursos_humanos');
    })

    app.get('/gestao_empresarial', function (req, res){
        res.render('pages/gestao_empresarial');
    })

    app.get('/gestao_empresarial_EAD', function (req, res){
        res.render('pages/gestao_empresarial_EAD');
    })

    app.get('/logistica', function (req, res){
        res.render('pages/logistica');
    })

    app.get('/polimeros', function (req, res){
        res.render('pages/polimeros');
    })

    app.get('/contato', function (req, res){
        res.render('pages/contato');
    })

    app.get('/requerimento_ao_coordenador', function (req, res){
        res.render('pages/requerimento_ao_coordenador');
    })

    app.get('/solicitacao_de_documentos', function (req, res){
        res.render('pages/solicitacao_de_documentos');
    })

    app.get('/form_bilhetes', function (req, res){
        res.render('pages/formulario_bilhete_unico');
    })

    app.post('/form_bilhetes/usuario/salvar', (req, res) => {
        //res.render('pages/formulario_bilhete_unico')
        try{
            var usuario ={id: 2,   
                nome: req.body.nome,
                CPF: req.body.cpf,
                RG: req.body.rg,
                EMISSAO: req.body.emissao,
                UF: req.body.uf,
                NOME_MAE: req.body.nomemae,
                DATA_NASCIMENTO: req.body.data,
                EMAIL: req.body.email,
                TELEFONE: req.body.telefone,
                CELULAR: req.body.celular,
                CEP: req.body.cep,
                ENDERECO: req.body.endereco,
                BAIRRO: req.body.bairro,
                CIDADE: req.body.cidade,
                ESTADO: req.body.estado,
                COMPLEMENTO: req.body.complemento,
                CURSO: req.body.curso,
                TURNO: req.body.turno,
                SEMESTRE: req.body.semestre,
                DATA_PEDIDO: req.body.datapedido,
                TARIFA: req.body.tipodetarifa
            
            }  
            usuarioBanco.insertUsuario(usuario);
            res.render('pages/index', {mensagem: 'cadastrado'});
        }catch(error){
            res.render('pages/formulario_bilhete_unico', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }  
    })

    app.get('/formulario_bilhete_bom', function (req, res){
        res.render('pages/formulario_bilhete_bom');
    })

    app.get('/prazo', function (req, res){
        res.render('pages/prazo');
    })

    app.get('/regulamentos', function (req, res){
        res.render('pages/regulamentos');
    })

    app.get('/faq', function (req, res){
        res.render('pages/faq');
    })

    app.get('/calendario', function (req, res){
        res.render('pages/calendario');
    })

    app.get('/login', function (req, res){
        if(req.query.fail) res.render('pages/form-1login', { mensagemLogin: 'Usúario e/ou senha incorretos!'});
        else res.render('pages/form-1login', { mensagemLogin: null});
    });
}
