const produto = require("./../models/produto")
const axios = require("axios");
const qs = require("querystring");

// var produtoControllers = require("./../models/produto")

var S = {}

//Inserir no banco - método-POST
S.inserir = function(req,res){
    produtoControllers.create({
        descricao: req.body.descricao,
        preco: req.body.preco,
        id_produto: req.body.id_produto,
    }).then({
        function(dados){
            res.status(200).send()
        }
    }).catch({
        function(erros){
            res.status(500).send("Erro na transmissão de sinal: "+erro)
        }
    })

}

//Método GET para buscar Um
S.buscarUm = function(req,res){
    produtoControllers.findOne({
        raw:true,
        where: {
        id_produto: req.body.id_produto,
        }
    }).then({
        function(dados){
            res.status(200).send()
        }
    }).catch({
        function(erros){
            res.status(500).send("Erro ao buscar um elemento:  "+erro)
        }
    })

}

//Método GET para buscar vários. 
S.buscarVarios = function(req,res){
    produtoControllers.findAll({
        raw:true
    }).then({
        function(dados){
            res.status(200).send(dados)
        }
    }).catch({
        function(erros){
            res.status(500).send('Erro ao buscar o conjunto de elementos:${erros}')
        }
    })
}

//Método-PUT
S.atualizar = function(req,res){
    produtoControllers.update({
        descricao: req.params.descricao,
        where: {id_produto: req.params.id_produto} 
    }).then({
        function(dados){
            res.status(200).send(dados)
        }
    }).catch({
        function(erros){
            res.status(500).send('Erro ao tentar atualizar o elemento:${erros}')
        }
    })
}

//Método-Delete
S.remover = function(req,res){
    produtoControllers.destroy({
        where: { id_produto: req.params.id_produto}
    }).then({
        function(dados){
            res.sendStatus(200)
        }
    }).catch({
        function(erros){
            res.status(500).send('Erro ao tentar remover o elemento do Conjunto:${erros}')
        }
    })
}

module.exports = S 