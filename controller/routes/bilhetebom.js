const seguranca = require("../../model/components/seguranca");
const bilhetebomDB = require("../../model/repositories/bilhetebomDB");
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app) {
  app.get("/formulario_bilhete_bom", function (req, res) {
    res.render("pages/formulario_bilhete_bom");
  });

  app.post("/formulario_bilhete_bom-usuario-salvar", (req, res) => {
    try {
      var bilhetebom = {
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
      console.info(bilhetebom);
      bilhetebomDB.insertBilheteBom(bilhetebom);
      res.render("pages/index", { mensagem: "cadastrado" });
    } catch (error) {
      res.render("pages/formulario_bilhete_bom", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  //GET da página lista.ejs
  app.get(
    "/listabilhetebom",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        const docs = await bilhetebomDB.selectBilheteBom();
        res.render("pages/listabilhetebom", {
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
    "/delete-bilhetebom/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        await bilhetebomDB.deleteBilheteBom(id);
        const docs = await bilhetebomDB.selectBilheteBom();
        res.render("pages/listabilhetebom", {
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
    "/edit-bilhetebom/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        const bilhetebom = await bilhetebomDB.getBilheteBomId(id);
        res.render("pages/editbilhetebom", {
          mensagem: "",
          bilhetebom,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //POST da página EditUsuario.ejs
  app.post("/cadastro-bilhetebom-edit-salvar", (req, res) => {
    var bilhetebom = {
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
      id: req.body.id,
    };
     try {
       bilhetebomDB.updateBilheteBom(bilhetebom);
       res.render("pages/Sucesso", { mensagem: "alterado" });
     } catch (error) {
       res.render("pages/bilhetebom", {
         title: "Edição Cadastro",
         mensagem: "Erro no cadastro",
       });
     }
  });
  
};
