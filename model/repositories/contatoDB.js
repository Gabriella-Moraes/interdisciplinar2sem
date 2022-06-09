const contatoDB = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");

async function insertContato(contato) {
  const conn = await contatoDB.connect();
  const sql =
    "INSERT INTO interSecretaria.CONTATO( nome, curso, mensagem, id) VALUES (?,?,?,?);";
    const values = [
      contato.nome,
      contato.cpf,
      contato.mensagem,
      contato.id,
  ];
  return await conn.query(sql, values);
}

async function selectContato() {
  const conn = await contatoDB.connect();
  const [rows] = await conn.query("SELECT * FROM contato;");
  return rows;
}

async function deleteContato(id) {
  const conn = await contatoDB.connect();
  const sql = "DELETE FROM contato where id=?;";
  return await conn.query(sql, [id]);
}

async function updateContato(contato) {
  const conn = await contatoDB.connect();
  const sql =
    "UPDATE contato SET nome=? , curso=? , mensagem=? where id=?;";
  const values = [
    contato.nome,
    contato.curso,
    contato.mensagem,
    contato.id,
  ];
  return await conn.query(sql, values);
}

async function getContatoId(id) {
  const conn = await contatoDB.connect();
  const sql = "SELECT * FROM contato where id=?;";
  const values = [id];
  const [rows] = await conn.query(sql, values);
  if (rows.length > 0) return rows[0];
  else return null;
}

module.exports = {
  insertContato,
  selectContato,
  deleteContato,
  updateContato,
  getContatoId,
};
