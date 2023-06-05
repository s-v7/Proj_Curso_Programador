var express = require("express");
var uv = express();
var produto = require("./controllers/produtoControllers");

uv.listen(8081,function(){
    console.log("Servidor em Processamento...")
})
uv.get("/", function(req,res){
    res.send("Seja bem vindo(a) ao meu site!!!")
})

//
