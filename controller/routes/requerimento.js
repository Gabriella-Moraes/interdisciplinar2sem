const seguranca = require('../../model/components/seguranca')
const requerimentoDB = require('../../model/repositories/requerimentoDB')
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app){
  

  app.get("/requerimento_ao_coordenador", function (req, res) {
    res.render("pages/requerimento_ao_coordenador");
  });
  app.post("/requerimento_ao_coordenador-usuario-salvar", (req, res) => {
    try {
     
      var requerimento = {
        nome: req.body.nome,
        ra: req.body.ra,
        curso: req.body.curso,
        turno: req.body.turno,
        email: req.body.email,
        celular: req.body.celular,
        solicitacao: req.body.solicitacao,
        id: req.body.id,
      };
      console.info(requerimento);
      requerimentoDB.insertRequerimento(requerimento);
      res.render("pages/index", { mensagem: "cadastrado" });
    } catch (error) {
      res.render("pages/requerimento_ao_coordenador", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  //GET da página lista.ejs
  app.get(
    "/listarequerimento",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        const docs = await requerimentoDB.selectRequerimento();
        res.render("pages/listarequerimento", {
          mensagem: "Lista de Requerimento",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão delete da página lista.ejs
  app.get(
    "/delete-requerimento/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        await requerimentoDB.deleteRequerimento(id);
        const docs = await requerimentoDB.selectRequerimento();
        res.render("pages/listarequerimento", {
          mensagem: "Usuário excluído com sucesso",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão editar da página lista.ejs
  app.get(
    "/edit-requerimento/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        const requerimento = await requerimentoDB.getRequerimentoId(id);
        res.render("pages/editrequerimento", {
          mensagem: "",
          requerimento,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //POST da página EditUsuario.ejs
  app.post("/cadastro-requerimento-edit-salvar", (req, res) => {
    var requerimento = {
      nome: req.body.nome,
      ra: req.body.ra,
      curso: req.body.curso,
      turno: req.body.turno,
      email: req.body.email,
      celular: req.body.celular,
      solicitacao: req.body.solicitacao,
      id: req.body.id,
    };
     try {
      requerimentoDB.updateRequerimento(requerimento);
       res.render("pages/Sucesso", { mensagem: "alterado" });
     } catch (error) {
       res.render("pages/requerimento_ao_coordenador", {
         title: "Edição Cadastro",
         mensagem: "Erro no cadastro",
       });
     }
  });

}

