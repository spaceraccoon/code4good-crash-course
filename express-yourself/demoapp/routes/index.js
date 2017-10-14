var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('perform some function');
  if (1 == 2) {
    res.render('index', { title: 'Express' });
  } else {
    res.render('index', { title: 'Hi'});
  }

});

module.exports = router;
