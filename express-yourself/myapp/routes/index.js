var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('yich', {name: 'Yi Chern' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: "is this home?" });
});

router.get('/nadia', function(req, res, next) {
  res.render('index', {title: 'hi' });
});

module.exports = router;
