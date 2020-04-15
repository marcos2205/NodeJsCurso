var http = require('http') //require('fs') manipular arquivo

http.createServer(function (req, res) {
    res.end("ola")
}).listen(8081);

console.log("servidor rodando")