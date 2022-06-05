const seguranca = require("../../model/components/seguranca");
const bilheteunico = require("../../model/repositories/bilheteunicoDB");
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app) {
  app.get("/formulario_bilhete_unico", function (req, res) {
    res.render("pages/formulario_bilhete_unico");
  });

  app.post("/formulario_bilhete_unico-usuario-salvar", (req, res) => {
    try {
      var bilheteunico = {
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
      console.info(bilheteunico);
      bilheteunicoDB.insertBilheteUnico(bilheteunico);
      res.render("pages/index", { mensagem: "cadastrado" });
    } catch (error) {
      res.render("pages/formulario_bilhete_unico", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  //GET da página lista.ejs
   app.get(
     "/lista/bilheteunico",
     seguranca.autenticar,
     async (req, res, next) => {
       try {
         const docs = await usuarioBanco.selectBilheteUnico();
         res.render("pages/listabilheteunico", {
           mensagem: "Lista de Usuário",
           docs,
         });
       } catch (err) {
         next(err);
       }
     }
   );

  //GET do botão delete da página lista.ejs
  app.get(
    "/delete/usuario/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        await bilheteunicoDB.deleteBilheteUnico(id);
        const docs = await bilheteunicoDB.selectBilheteUnico();
        res.render("pages/bilheteunicolista", {
          mensagem: "Usuário excluído com sucesso",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão editar da página lista.ejs
  // app.get("/edit/usuario/:id", seguranca.autenticar, async (req, res, next) => {
  //   try {
  //     var id = req.params.id;
  //     const usuario = await bilheteunicoDB.getUsuarioId(id);
  //     res.render("usuario/EditUsuario", { mensagem: "", usuario });
  //   } catch (err) {
  //     next(err);
  //   }
  // });
} 