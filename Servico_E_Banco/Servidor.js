var express = require("express")
var svc = express()

svc.listen(8081, function(){
    console.log("Servidor Executando...")
})
//Rota_01
svc.get("/somar", function(req,res){
    res.sendFile( __dirname + "/somarElem.html")
})
//Rota_02 => /multiplicar/:mul1/mul2
svc.get("/multiplicacao/:mul1/:mul2", function(req,res){
    res.send("A multiplicação é "+(req.params.mul1 * req.params.mul2))
})
//Rota raiz que direcinar para outras páginas !!!
svc.get("/", function(req,res){
    res.sendFile( __dirname + "/rotas.html")
})
//outras Páginas
svc.get("/funcao_k", function(req,res){
    res.sendFile( __dirname + "/funcao_k.html")
})

//Outras fuções para testes!

svc.get("/BuscaSequencial", function(req,res){
    res.sendFile( __dirname + "/BuscaSequencial.html")
})
svc.get("/uvw", function(req,res){
    res.send("<h1> Olá Tudo Bem?</h1>")

})
svc.get("/soma", function(req,res){
    res.sendFile( __dirname + "/soma.html")
})







