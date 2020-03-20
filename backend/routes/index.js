var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const { headers } = req;
  // const userAgent = headers['user-agent'];
  res.send(headers);
});

module.exports = router;
