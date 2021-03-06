const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./",{
    express:server
})


//configurar a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html",{donors})
})



// ligar o servidor e pertmitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})