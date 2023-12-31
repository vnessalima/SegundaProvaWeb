var express = require('express');
var router = express.Router();
var alunoServiceMongo = require("../services/aluno.services.mongo")

router.get( //faz a lista de alunos 
    "/listar"
    ,
    (request, response, next) => {
        alunoServiceMongo.list(request,response)
    }
)

router.post(  //salva o registro de alunos 
    "/register"
    ,
    (request, response, next) => {
        alunoServiceMongo.register(request,response)
    }
)

router.get(
    "/media"
    ,
    (request, response, next) => {
        alunoServiceMongo.media(request,response)
    }
)

router.get( //guarda o nome dos alunos que foram aprovados 
    "/aprovados"
    ,
    (request, response, next) => {
        alunoServiceMongo.aprovados(request,response)
    }
)

router.put(
    "/update/:id"
    ,
    (request, response, next) => {
        alunoServiceMongo.update(request,response)
    }
)

router.delete("/delete/:id"
    ,
    function (request, response, next) {
        alunoServiceMongo.delete(request,response)
    }
)

router.get('/retrieve/:id', function (request, response, next) {
    alunoServiceMongo.retrieve(request,response)
});

module.exports = router;
