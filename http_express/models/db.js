const Sequelize = require('sequelize')
//conectar no banco
const sequelize = new Sequelize('sistemadecadastro', 'root', '123local', {
    host: "localhost",
    dialect: "mysql"
})
//verificar se conseguiu se conectar/autenticar no banco
sequelize.authenticate().then(function () {
    console.log("conectado com sucesso!")
}).catch(function (erro) {
    console.log("falha ao se conectar: " + erro)
})
//torna expostavel
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}