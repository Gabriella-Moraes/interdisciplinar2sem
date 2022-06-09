const seguranca = require("../../model/components/seguranca");
const contatoDB = require("../../model/repositories/contatoDB");
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app) {
  app.get("/contato", function (req, res) {
    res.render("pages/contato");
  });

  app.post("/contato-usuario-salvar", (req, res) => {
    try {
      var contato = {
        nome: req.body.nome,
        curso: req.body.curso,
        mensagem: req.body.mensagem,
      };
      console.info(contato);
      contatoDB.insertContato(contato);
      res.render("pages/index", { mensagem: "cadastrado" });
    } catch (error) {
      res.render("pages/contato", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  //GET da página lista.ejs
  app.get("/listacontato", seguranca.autenticar, async (req, res, next) => {
    try {
      const docs = await contatoDB.selectContato();
      res.render("pages/listaContato", {
        mensagem: "Lista de Usuário",
        docs,
      });
    } catch (err) {
      next(err);
    }
  });

  //GET do botão delete da página lista.ejs
  app.get(
    "/delete/contato/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        await contatoDB.deleteContato(id);
        const docs = await contatoDB.selectContato();
        res.render("pages/listacontato", {
          mensagem: "Usuário excluído com sucesso",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão editar da página lista.ejs
  app.get("/edit-contato/:id", seguranca.autenticar, async (req, res, next) => {
    try {
      var id = req.params.id;
      const contato = await contatoDB.getContatoId(id);
      res.render("pages/editcontato", {
        mensagem: "",
        contato,
      });
    } catch (err) {
      next(err);
    }
  });

  //POST da página EditUsuario.ejs
  app.post("/cadastro-contato-edit-salvar", (req, res) => {
    var contato = {
      nome: req.body.nome,
      curso: req.body.curso,
      mensagem: req.body.mensagem,
      id: req.body.id,
    };
    try {
      contatoDB.updateContato(contato);
      res.render("pages/Sucesso", { mensagem: "alterado" });
    } catch (error) {
      res.render("pages/contato", {
        title: "Edição Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });
};
