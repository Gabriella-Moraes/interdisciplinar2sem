const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function selectUsuario(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function insertUsuario(usuario){
    const conn = await usuarioDB.connect();
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

async function deleteUsuario(id){
    const conn = await usuarioDB.connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(usuario){
    const conn = await usuarioDB.connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? where id=?;';
    const values = [usuario.nome, usuario.senha, usuario.id];
    return await conn.query(sql, values);
}

async function getUsuarioId(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM usuario where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

async function login(email, senha){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM usuario where email=? and senha=?;';
    const values = [email, seguranca.ocultarsenha(senha)];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario, getUsuarioId, login};
