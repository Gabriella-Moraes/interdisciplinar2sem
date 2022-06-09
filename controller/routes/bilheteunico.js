const seguranca = require("../../model/components/seguranca");
const bilheteunicoDB = require("../../model/repositories/bilheteunicoDB");
//const bilheteUnico = require('../../controller/SQL/BilheteUnico')

module.exports = function (app) {
  app.get("/formulario_bilhete_unico", function (req, res) {
    res.render("pages/formulario_bilhete_unico");
  });



  app.post("/formulario_bilhete_unico-bilheteunico-salvar", (req, res) => {
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
        id: req.body.id,
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
    "/listabilheteunico",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        const docs = await bilheteunicoDB.selectBilheteUnico();
        res.render("pages/listabilheteunico", {
          mensagem: "Lista Bilhete Unico",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão delete da página lista.ejs
  app.get(
    "/delete-bilheteunico/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        await bilheteunicoDB.deleteBilheteUnico(id);
        const docs = await bilheteunicoDB.selectBilheteUnico();
        res.render("pages/listabilheteunico", {
          mensagem: "Lista Bilhete Unico",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET do botão editar da página lista.ejs
  app.get(
    "/edit-bilheteunico/:id",
    seguranca.autenticar,
    async (req, res, next) => {
      try {
        var id = req.params.id;
        const bilheteunico = await bilheteunicoDB.getBilheteUnicoId(id);
        res.render("pages/editbilheteunico", {
          mensagem: "",
          bilheteunico,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //POST da página EditUsuario.ejs
  app.post("/cadastro-bilheteunico-edit-salvar", (req, res) => {
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
      id: req.body.id,
    };
     try {
       bilheteunicoDB.updateBilheteUnico(bilheteunico);
       res.render("pages/Sucesso", { mensagem: "alterado" });
     } catch (error) {
       res.render("pages/bilheteunico", {
         title: "Edição Cadastro",
         mensagem: "Erro no cadastro",
       });
     }
  });
  
} 