var express = require('express');
var router = express.Router();
var axios = require('axios');
var clientID = '299461535d2b2771e269';
var clientSecret = '575ed2dd6dcdb69654fd2ae17862cc86800563a1';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauth/callback', (req, res)=> {
  const requestToken = req.query.code;
  axios({
    method:'post',
    url:`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers:{
      accept:'application/json'
    }
  })
  .then(response=>{
    const accessToken = response.data.access_token;
    console.log('accessToken is ',response);
    res.redirect(`/welcome.html?access_token=${accessToken}`);
  })
});


module.exports = router;
