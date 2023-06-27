var express = require('express');
var router = express.Router();
var alunoServiceMongo = require("../services/AlunoService")

router.get(
  "/listar"
  ,
  (request, response, next) => {
    alunoServiceMongo.list(request, response)
  }
)

router.post(
  "/register"
  ,
  (request,response,next) => {
    alunoServiceMongo.register(request, response)
  }
)

router.put(
  "/update/:id"
  ,
  (request,response,next) => {
    alunoServiceMongo.update(request, response)
  }
)

router.delete(
  "/delete/:id"
  ,
  (request, response, next) => {
    alunoServiceMongo.delete(request, response)
  }
)

router.get(
  "/retrieve/:id"
  ,
  (request, response, next) => {
    alunoServiceMongo.retrieve(request, response)
  }
)

module.exports = router;