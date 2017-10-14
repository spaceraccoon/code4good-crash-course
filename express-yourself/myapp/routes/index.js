var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Isabella Web App' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: "is this home?" });
});

router.get('/nadia', function(req, res, next) {
	res.render('index', {title: 'hi' });
    });

module.exports = router;
