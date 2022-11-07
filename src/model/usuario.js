const mongoose = require("mongoose");

const SchemaUsers = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    datacadastro: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("usuario", SchemaUsers);