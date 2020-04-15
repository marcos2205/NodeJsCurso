//npm install express --save //na pasta do projeto

const express = require("express")
const app = express()

//rota
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/_html/index.html")
})
app.get('/sobre', function (req, res) {
    res.send("sobre")
})
app.get('/blog', function (req, res) {
    res.send("blog")
})

//parametros
app.get('/ola/:nome/:cargo', function (req, res) {
    //res.send(req.params) //apenas um send
    res.send(`ola ${req.params.nome} ${req.params.cargo}`)
})

app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081")
}) //sempre o ultimo