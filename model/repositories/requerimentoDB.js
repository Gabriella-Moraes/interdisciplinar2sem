const usuarioDB = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");

async function selectUsuario() {
  const conn = await usuarioDB.connect();
  const [rows] = await conn.query("SELECT * FROM usuario;");
  return rows;
}

async function insertRequerimento(usuario) {
  const conn = await usuarioDB.connect();
  const sql =
    "INSERT INTO interSecretaria.REQUERIMENTO_COORD(nome, ra, curso, turno, email, celular, solicitacao, id) VALUES (?,?,?,?,?,?,?,?);";
  const values = [
    usuario.nome,
    usuario.ra,
    usuario.curso,
    usuario.turno,
    usuario.email,
    usuario.celular,
    usuario.solicitacao,
    usuario.id,
  ];
  return await conn.query(sql, values);
}


module.exports = {
  insertRequerimento
};
