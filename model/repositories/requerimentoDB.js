const requerimentoDB = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");

async function selectRequerimento() {
  const conn = await requerimentoDB.connect();
  const [rows] = await conn.query("SELECT * FROM requerimento;");
  return rows;
}

async function insertRequerimento(requerimento) {
  const conn = await requerimentoDB.connect();
  const sql =
    "INSERT INTO interSecretaria.REQUERIMENTO(nome, ra, curso, turno, email, celular, solicitacao, id) VALUES (?,?,?,?,?,?,?,?);";
  const values = [
    requerimento.nome,
    requerimento.ra,
    requerimento.curso,
    requerimento.turno,
    requerimento.email,
    requerimento.celular,
    requerimento.solicitacao,
    requerimento.id,
  ];
  return await conn.query(sql, values);
}

async function selectRequerimento() {
  const conn = await requerimentoDB.connect();
  const [rows] = await conn.query("SELECT * FROM requerimento;");
  return rows;
}

async function deleteRequerimento(id) {
  const conn = await requerimentoDB.connect();
  const sql = "DELETE FROM requerimento where id=?;";
  return await conn.query(sql, [id]);
}

async function updateRequerimento(requerimento) {
  const conn = await requerimentoDB.connect();
  const sql =
    "UPDATE requerimento SET nome=? , ra=? , curso=?, turno=? , email=?, celular=? , solicitacao=? where id=?;";
  const values = [
    requerimento.nome,
    requerimento.ra,
    requerimento.curso,
    requerimento.turno,
    requerimento.email,
    requerimento.celular,
    requerimento.solicitacao,
    requerimento.id,
  ];
  return await conn.query(sql, values);
}

async function getRequerimentoId(id) {
  const conn = await requerimentoDB.connect();
  const sql = "SELECT * FROM requerimento where id=?;";
  const values = [id];
  const [rows] = await conn.query(sql, values);
  if (rows.length > 0) return rows[0];
  else return null;
}

module.exports = {
  insertRequerimento,
  selectRequerimento,
  deleteRequerimento,
  updateRequerimento,
  getRequerimentoId,
};
