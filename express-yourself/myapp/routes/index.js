var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('yich', {name: 'Yi Chern' });
})



module.exports = router;
