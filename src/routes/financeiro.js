const express = require("express");
const Financeiro = require("../model/financeiro");
const verificar_token = require("../middleware/verificartoken");

const route = express.Router();

route.get("/", verificar_token, (req, res) => {
  Financeiro.find((erro, dados) => {
      if (erro)
        return res
          .status(500)
          .send({ output: `Erro ao processar dados -> ${erro}` });
      res.status(200).send({ output: "ok", payload: dados });
    });
});

route.post("/cadastro", verificar_token, (req, res) => {
      const dados = new Financeiro(req.body);
      dados
      .save()
      .then((result) => {
          res.status(201).send({ output: "Cadastro de informações financeiras realizado", payload: result });
      })
      .catch((erro) =>
          res.status(500).send({ output: `Erro ao cadastrar informações financeiras -> ${erro}` })
      );
  });

route.put("/atualizar/:id", verificar_token, (req, res) => {
  Financeiro.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res
          .status(500)
          .send({ output: `Erro ao processar a atualização de informações financeiras -> ${erro}` });
      if (!dados)
        return res
          .status(400)
          .send({ output: `Não foi possível atualizar as informações financeiras -> ${erro}` });
      return res.status(202).send({ output: "Informações financeiras atualizadas", payload: dados });
    }
  );
});

route.delete("/apagar/:id", verificar_token, (req, res) => {
    Financeiro.findByIdAndDelete(req.params.id, (erro, dados) => {
      if (erro)
        return res
          .status(500)
          .send({ output: `Erro ao tentar apagar as informações financeiras -> ${erro}` });
      res.status(204).send({});
    });
});

module.exports = route;