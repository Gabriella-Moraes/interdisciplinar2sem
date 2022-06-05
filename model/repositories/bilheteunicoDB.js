const bilheteunicoBanco = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");



async function insertBilheteUnico(usuario) {
  const conn = await bilheteunicoBanco.connect();
  const sql =
    "INSERT INTO interSecretaria.BILHETEUNICO( nome, cpf, rg, emissao, uf, nome_mae, data_nascimento, email, telefone, celular, cep, endereco, bairro, cidade, estado, complemento, curso, turno, semestre,data_pedido, tarifa, id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  const values = [
    usuario.nome,
    usuario.cpf,
    usuario.rg,
    usuario.emissao,
    usuario.uf,
    usuario.nome_mae,
    usuario.data_nascimento,
    usuario.email,
    usuario.telefone,
    usuario.celular,
    usuario.cep,
    usuario.endereco,
    usuario.bairro,
    usuario.cidade,
    usuario.estado,
    usuario.complemento,
    usuario.curso,
    usuario.turno,
    usuario.semestre,
    usuario.data_pedido,
    usuario.tarifa,
    usuario.id,
  ];
  return await conn.query(sql, values);
}


  async function selectBilheteUnico() {
    const conn = await bilheteunicoBanco.connect();
    const [rows] = await conn.query("SELECT * FROM usuario;");
    return rows;
  }

  async function deleteBilheteUnico(id) {
    const conn = await bilheteunicoBanco.connect();
    const sql = "DELETE FROM usuario where id=?;";
    return await conn.query(sql, [id]);
  }

module.exports = {
  insertBilheteUnico,
  selectBilheteUnico,
  deleteBilheteUnico,
};
