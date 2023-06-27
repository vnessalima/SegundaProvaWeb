var express = require('express');
var router = express.Router();
var professorServiceMongo = require("../services/ProfessorService")


router.get(
  "/listar"
  ,
  (request, response, next) => {
    professorServiceMongo.list(request, response)
  }
)

router.post(
  "/register"
  ,
  (request,response,next) => {
    professorServiceMongo.register(request, response)
  }
)


router.put(
  "/update/:id"
  ,
  (request,response,next) => {
    professorServiceMongo.update(request, response)
  }
)


router.delete(
  "/delete/:id"
  ,
  (request, response, next) => {
    professorServiceMongo.delete(request, response)
  }
)


router.get(
  "/retrieve/:id"
  ,
  (request, response, next) => {
    professorServiceMongo.retrieve(request, response)
  }
)

module.exports = router;