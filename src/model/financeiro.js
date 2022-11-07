const mongoose = require("mongoose");

const SchemaFinantial = new mongoose.Schema({
    nome_titular: { type: String, required: true},
    nome_banco: { type: String, required: true},
    tipo_conta: { type: String, required: true },
    limite_cartao: { type: Number, required: true },
  });
  module.exports = mongoose.model("financeiro", SchemaFinantial);