var express = require('express');
var router = express.Router();

var user = {
  email: "vnessa.lima3@gmail.com",
  password: "senha"
}

router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});


router.post('/Login', function(req, res, next) {
  
  var email = req.body["email"];
  var password = req.body["password"]
  
  if(password == user.password && email == user.email){
    res.status(200).json({res: true});
  }else{
    
    res.status(401).json({res: false});
  }
});

module.exports = router;
