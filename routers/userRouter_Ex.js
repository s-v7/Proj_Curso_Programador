const express = require("express");
const userController = require("../controllers/userController");

const routes = express.Router();

//Primeiro rotas
routes.get("/", userController.findAll);
routes.post("/", userController.create);
routes.put("/:id", userController.update);
routes.delete("/:id", userController.delete);
//
routes.get("/newForm", userController.showFormNew);
routes.get("/editForm/:id", userController.showFormEdit);
routes.get("/delReq/:id", userController.makeDeleteReq);
routes.post("/editReq/:id", userController.makeEditReq);

module.exports = routes;
