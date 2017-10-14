var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "i'm expressing myself" });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: "is this home?" });
});

module.exports = router;
