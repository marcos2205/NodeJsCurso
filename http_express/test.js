const Sequelize = require('sequelize')
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

//criação de model com sequelize para criar tabela
const Postagem = sequelize.define('postagens', {
    titulo: { type: Sequelize.STRING },
    conteudo: { type: Sequelize.TEXT }
})
//Postagem.sync({ force: true }) // vai deletar caso tenha
Postagem.sync()
const Usuario = sequelize.define('usuarios', {
    nome: { type: Sequelize.STRING },
    sobrenome: { type: Sequelize.STRING },
    idade: { type: Sequelize.INTEGER },
    email: { type: Sequelize.STRING }
})
Usuario.sync()

//inserindo dados no banco
Postagem.create({
    titulo: "OUTRO TITULO",
    conteudo: "QUALQUER TAMBEM"
})
Usuario.create({
    nome: "marcos",
    sobrenome: "barbosa",
    idade: 28,
    email: "marcos2205@gmail.com"
})