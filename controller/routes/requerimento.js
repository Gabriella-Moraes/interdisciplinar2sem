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

}

