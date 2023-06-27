var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.services")
var professorServiceMongo = require("../services/professor.services.mongo")

router.get(  //guarda a lista de professores
    "/listar"
    ,
    (request, response, next) => {
        professorServiceMongo.list(request,response)
    }
)

router.post(  //guarda o registro dos professores 
    "/register"
    ,
    (request, response, next) => {
        professorServiceMongo.register(request,response)
    }
)


router.put(
    "/update/:id"   //update quando precisar trocar de professor 
    ,
    (request, response, next) => {
        professorServiceMongo.update(request,response)
    }
)


router.delete("/delete/:id"
    ,
    function (request, response, next) {
        professorServiceMongo.delete(request,response)
    }
)


router.get('/retrieve/:id', function (request, response, next) {
    professorServiceMongo.retrieve(request,response)
});

module.exports = router;
