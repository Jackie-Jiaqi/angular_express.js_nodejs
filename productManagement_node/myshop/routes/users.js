var express = require('express');
var router = express.Router();
var User = require('../models/model-user');

router.get('/', function (req, res, next) {
  User.find(function (err, data) {
      if (err) return next(err);
      res.json(data);
  });
});
//login api
router.post('/login', function (req, res, next) {
  User.findOne({userName:req.body.userName},function(err,user){
    if(err) throw"user not found";
    if (user){
      if (req.body.password == user.password){
        res.json({code:'0',msg:"login success"})
      }
      else
      res.json({code:'1',msg:'password is wrong'});
    }
    else{
      res.json({code:'2',msg:'user does not exist'});
    }
  })
  });
//register api
  router.post('/register', function (req, res, next) {
    User.create(
        req.body,
        function (err, user) {
            if (err) return next(err);
            res.json(user);
        }
    );
});










module.exports = router;