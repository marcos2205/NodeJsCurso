const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require('./models/Post')

//config
//template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//rotas
app.get('/',function(req,res){
    Post.findAll().then(function(posts){
        res.render('home',{posts: posts})
    })
})
app.get('/cad', function (req, res) {
    res.render('formulario')
})
app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send("erro")
    })
})

//sempre o ultimo
app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081")
})