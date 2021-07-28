const user = require('../models/user');
const axios = require('axios');
const qs = require('querystring');

const userController = {};

userController.findAll = function (req, res) {
    user.findAll({
        raw: true
    })
        .then(function (data) {
            res.status(200).render("table", { user: data });
        })
        .catch(function (err) {
            res.status(500).send("Erro ao listar users: " + err);
        });
};

userController.create = function (req, res) {
    user.create({
        email: req.body.email,
        pass: req.body.pass
    })
        .then(function (data) {
            res.status(200).redirect("/");
        })
        .catch(function (err) {
            res.status(500).send("Erro ao criar user: " + err);
        });
};


userController.delete = function (req, res) {
    user.destroy({
        where: { id_user: req.params.id }
    })
        .then(function (data) {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar user: " + err);
        });
};

userController.update = function (req, res) {
    user.update(
        {
            email: req.body.email,
            pass: req.body.pass
        },
        {
            where: { id_user: req.params.id }
        })
        .then(function (data) {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(500).send("Erro ao atualizar user: " + err);
        });
};

userController.showFormNew = function (req, res) {
    res.render("formNew");
};

userController.showFormEdit = function (req, res) {
    res.render("formEdit", { id_user: req.params.id });
};

userController.makeDeleteReq = function (req, res) {
    axios.delete('/' + req.params.id)
        .then(function () {
            res.status(200).redirect("/");
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar user: " + err);
        });
};

userController.makeEditReq = function (req, res) {
    axios.put('/' + req.params.id,
        qs.stringify({
            email: req.body.email,
            pass: req.body.pass
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )
        .then(function () {
            res.status(200).redirect("/");
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar user: " + err);
        });
};

module.exports = userController;
