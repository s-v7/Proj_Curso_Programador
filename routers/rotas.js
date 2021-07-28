var express = require("express")
const produto = require("../models/produto")

var produtoControllers = require("./../Controllers/produtoControllers")
var rotas_Produtos = express.Router()

//Rotas API

rotas_Produtos.get("/produtos", S.bucarVarios)
rotas_Produtos.get("/produtos/:id", S.buscarUm)
rotas_Produtos.post("/produtos", S.inserir)
rotas_Produtos.put("/produtos/:id", S.atualizar)
rotas_Produtos.delete("/produtosq:id", S.remover)


module.exports = rotas_Produtos