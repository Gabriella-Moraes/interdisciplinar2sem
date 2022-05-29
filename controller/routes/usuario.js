const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app){

    app.get("/", function(req, resp){
        resp.render("pages/Login/home");
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
            var usuario = {
                
                nome: req.body.nome,
                cpf: req.body.cpf,
                rg: req.body.rg,
                emissao: req.body.emissao,
                uf: req.body.uf,
                nome_mae: req.body.nomemae,
                data_nascimento: req.body.data,
                email: req.body.email,
                telefone: req.body.telefone,
                celular: req.body.celular,
                cep: req.body.cep,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                complemento: req.body.complemento,
                curso: req.body.curso,
                turno: req.body.turno,
                semestre: req.body.semestre,
                data_pedido: req.body.datapedido,
                tarifa: req.body.tipodetarifa
            
            }  
            usuarioBanco.insertUsuario(usuario);
            res.render('pages/index', {mensagem: 'cadastrado'});
        }catch(error){
            res.render('pages/formulario_bilhete_unico', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }  
    })

    app.get("/form_bilhete_bom", function (req, res) {
      res.render("pages/formulario_bilhete_bom");
    });

     app.post("/form_bilhete_bom/usuario/salvar", (req, res) => {
       try {
         var usuario = {
           nome: req.body.nome,
           cpf: req.body.cpf,
           rg: req.body.rg,
           emissao: req.body.emissao,
           uf: req.body.uf,
           nome_mae: req.body.nomemae,
           data_nascimento: req.body.data,
           email: req.body.email,
           telefone: req.body.telefone,
           celular: req.body.celular,
           cep: req.body.cep,
           endereco: req.body.endereco,
           bairro: req.body.bairro,
           cidade: req.body.cidade,
           estado: req.body.estado,
           complemento: req.body.complemento,
           curso: req.body.curso,
           turno: req.body.turno,
           semestre: req.body.semestre,
           data_pedido: req.body.datapedido,
           tarifa: req.body.tipodetarifa,
         };
         usuarioBanco.insertUsuario(usuario);
         res.render("pages/index", { mensagem: "cadastrado" });
       } catch (error) {
         res.render("pages/formulario_bilhete_bom", {
           title: "Cadastro",
           mensagem: "Erro no cadastro",
         });
       }
     });

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



        //GET da Página de cadastro de novos usuários    
    app.get('/cadastro', function (req, res){
        if(req.query.fail) 
            res.render('usuario/CadastroUsuario', {mensagem: 'Cadastro'});
        else
            res.render('usuario/CadastroUsuario', {mensagem: null});

    })
    
    //POST da página EditUsuario.ejs
    app.post('/cadastro/usuario/edit/salvar', (req, res) => {
        var usuario = { 
            nome: req.body.nome,
            senha: req.body.senha,
            id: req.body.id
        };
        try {
            usuarioBanco.updateUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'alterado'});
        } catch (error){
            res.render('usuario/EditUsuario', {title: 'Edição Cadastro', mensagem: "Erro no cadastro"})
        }
    })

    //POST da página CadastroUsuario.ejs 
    app.post('/cadastro/usuario/salvar', seguranca.autenticar, (req, res) => {
        try {
            var usuario = {nome: req.body.nome,
                           senha: seguranca.ocultarsenha(req.body.senha)}
            usuarioBanco.insertUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'cadastrado'});
        } catch (error){
            res.render('usuario/CadastroUsuario', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }
    })

    //GET da página lista.ejs
    app.get('/lista/usuario', seguranca.autenticar, async (req, res, next) => {
        try{
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', { mensagem: 'Lista de Usuário', docs });
        } catch (err){
            next(err);
        }
    });

    //GET do botão delete da página lista.ejs
    app.get('/delete/usuario/:id', seguranca.autenticar, async (req, res, next) => {
        try{
            var id = req.params.id;
            await usuarioBanco.deleteUsuario(id);
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', { mensagem: 'Usuário excluído com sucesso', docs });
        } catch (err){
            next(err);
        }
    });

    //GET do botão editar da página lista.ejs
    app.get('/edit/usuario/:id', seguranca.autenticar, async (req, res, next) => {
        try{
            var id = req.params.id;
            const usuario = await usuarioBanco.getUsuarioId(id);
            res.render('usuario/EditUsuario', { mensagem: '', usuario });
        } catch (err){
            next(err);
        }
    });

    //GET da página Login.ejs
    app.get('/login', function (req, res) {
        if(req.query.fail) res.render('usuario/Login', { mensagemLogin: 'Usúario e/ou senha incorretos!'});
        else res.render('usuario/Login', { mensagemLogin: null});
    });

}

