var express = require("express")
const produto = require("../models/produto")

var produtoControllers = require("./../Controllers/produtoControllers")
var rotas_Produtos = express.Router()

//Rotas API

rotas_Produtos.get("/produtos", produtoS.bucarVarios)
rotas_Produtos.get("/produtos/:id", produtoS.buscarUm)
rotas_Produtos.post("/produtos", produtoS.inserir)
rotas_Produtos.put("/produtos/:id", produtoS.atualizar)
rotas_Produtos.delete("/produtosq:id", produtoS.remover)


module.exports = rotas_Produtos;
