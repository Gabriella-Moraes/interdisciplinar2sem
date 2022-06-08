const bilhetebomDB = require("../../controller/SQL/db");
const seguranca = require("../components/seguranca");

async function selectBilheteBom() {
  const conn = await bilhetebomDB.connect();
  const [rows] = await conn.query("SELECT * FROM usuario;");
  return rows;
}

async function insertBilheteBom(bilhetebom) {
  const conn = await bilhetebomDB.connect();
  const sql =
    "INSERT INTO interSecretaria.BILHETEBOM( nome, cpf, rg, emissao, uf, nome_mae, data_nascimento, email, telefone, celular, cep, endereco, bairro, cidade, estado, complemento, curso, turno, semestre,data_pedido, tarifa, id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  const values = [
    bilhetebom.nome,
    bilhetebom.cpf,
    bilhetebom.rg,
    bilhetebom.emissao,
    bilhetebom.uf,
    bilhetebom.nome_mae,
    bilhetebom.data_nascimento,
    bilhetebom.email,
    bilhetebom.telefone,
    bilhetebom.celular,
    bilhetebom.cep,
    bilhetebom.endereco,
    bilhetebom.bairro,
    bilhetebom.cidade,
    bilhetebom.estado,
    bilhetebom.complemento,
    bilhetebom.curso,
    bilhetebom.turno,
    bilhetebom.semestre,
    bilhetebom.data_pedido,
    bilhetebom.tarifa,
    bilhetebom.id,
  ];
  return await conn.query(sql, values);
}


 async function selectBilheteBom() {
   const conn = await bilhetebomDB.connect();
   const [rows] = await conn.query("SELECT * FROM bilhetebom;");
   return rows;
 }

 async function deleteBilheteBom(id) {
   const conn = await bilhetebomDB.connect();
   const sql = "DELETE FROM bilhetebom where id=?;";
   return await conn.query(sql, [id]);
 }

 async function updateBilheteBom(bilhetebom) {
   const conn = await bilhetebomDB.connect();
   const sql =
     "UPDATE bilhetebom SET nome=? , cpf=? , rg=?, emissao=? , uf=?, nome_mae=? , email=? , telefone=? , celular=?, cep=?, endereco=?, bairro=?, cidade=?, estado=?, complemento=?, curso=?, turno=?, semestre=?, tarifa=? where id=?;";
   const values = [
     bilhetebom.nome,
     bilhetebom.cpf,
     bilhetebom.rg,
     bilhetebom.emissao,
     bilhetebom.uf,
     bilhetebom.nome_mae,
     bilhetebom.email,
     bilhetebom.telefone,
     bilhetebom.celular,
     bilhetebom.cep,
     bilhetebom.endereco,
     bilhetebom.bairro,
     bilhetebom.cidade,
     bilhetebom.estado,
     bilhetebom.complemento,
     bilhetebom.curso,
     bilhetebom.turno,
     bilhetebom.semestre,
     bilhetebom.tarifa,
     bilhetebom.id,
   ];
   return await conn.query(sql, values);
 }

 async function getBilheteBomId(id) {
   const conn = await bilhetebomDB.connect();
   const sql = "SELECT * FROM bilhetebom where id=?;";
   const values = [id];
   const [rows] = await conn.query(sql, values);
   if (rows.length > 0) return rows[0];
   else return null;
 }

 module.exports = {
   insertBilheteBom,
   selectBilheteBom,
   deleteBilheteBom,
   updateBilheteBom,
   getBilheteBomId,
 };
