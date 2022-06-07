const bilheteunicoDB = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");



async function insertBilheteUnico(bilheteunico) {
  const conn = await bilheteunicoDB.connect();
  const sql =
    "INSERT INTO interSecretaria.BILHETEUNICO( nome, cpf, rg, emissao, uf, nome_mae, data_nascimento, email, telefone, celular, cep, endereco, bairro, cidade, estado, complemento, curso, turno, semestre,data_pedido, tarifa, id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  const values = [
    bilheteunico.nome,
    bilheteunico.cpf,
    bilheteunico.rg,
    bilheteunico.emissao,
    bilheteunico.uf,
    bilheteunico.nome_mae,
    bilheteunico.data_nascimento,
    bilheteunico.email,
    bilheteunico.telefone,
    bilheteunico.celular,
    bilheteunico.cep,
    bilheteunico.endereco,
    bilheteunico.bairro,
    bilheteunico.cidade,
    bilheteunico.estado,
    bilheteunico.complemento,
    bilheteunico.curso,
    bilheteunico.turno,
    bilheteunico.semestre,
    bilheteunico.data_pedido,
    bilheteunico.tarifa,
    bilheteunico.id,
  ];
  return await conn.query(sql, values);
}


  async function selectBilheteUnico() {
    const conn = await bilheteunicoDB.connect();
    const [rows] = await conn.query("SELECT * FROM bilheteunico;");
    return rows;
  }

  async function deleteBilheteUnico(id) {
    const conn = await bilheteunicoDB.connect();
    const sql = "DELETE FROM bilheteunico where id=?;";
    return await conn.query(sql, [id]);
}
  
async function updateBilheteUnico(bilheteunico) {
  const conn = await bilheteunicoDB.connect();
  const sql = "UPDATE bilheteunico SET nome=? , cpf=? , rg=?, emissao=? , uf=?, nome_mae=? , data_nascimento=?, email=? , telefone=? , celular=? where id=?;";
  const values = [
    bilheteunico.nome,
    bilheteunico.cpf,
    bilheteunico.rg,
    bilheteunico.emissao,
    bilheteunico.uf,
    bilheteunico.nome_mae,
    bilheteunico.data_nascimento,
    bilheteunico.email,
    bilheteunico.telefone,
    bilheteunico.celular,
    bilheteunico.id,
  ];
  return await conn.query(sql, values);
}

async function getBilheteUnicoId(id) {
  const conn = await bilheteunicoDB.connect();
  const sql = "SELECT * FROM bilheteunico where id=?;";
  const values = [id];
  const [rows] = await conn.query(sql, values);
  if (rows.length > 0) return rows[0];
  else return null;
}


module.exports = {
  insertBilheteUnico,
  selectBilheteUnico,
  deleteBilheteUnico,
  updateBilheteUnico,
  getBilheteUnicoId,
};
