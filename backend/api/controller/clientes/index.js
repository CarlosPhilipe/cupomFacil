// agrupa todas todos os recursos num único canto para a chamada
var cliente = [];
cliente.novo          = require("./novo.js");       // POST
cliente.buscarTodos   = require("./buscarTodos.js");// GET
cliente.buscar        = require("./buscar.js");     // GET COM ID
cliente.alterar       = require("./alterar.js");    // PUT
cliente.excluir       = require("./excluir.js");    // DELETE
// retorna as funções
module.exports = cliente; // retorna um objeto com os recursos
