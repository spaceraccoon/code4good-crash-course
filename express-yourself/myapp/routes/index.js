var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express yourself' });
});

router.get('/nadia', function(req, res, next) {
	res.render('index', {title: 'hi' });
    });

module.exports = router;
