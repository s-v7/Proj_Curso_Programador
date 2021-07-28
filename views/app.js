const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./routes/userRoutes");
const PORT = 80;

const server = express();
server.engine("handlebars", handlebars({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(PORT, function () {
    console.log("Servidor http rodando na porta " + PORT + "...");
})
