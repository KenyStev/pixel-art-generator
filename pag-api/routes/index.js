var express = require('express');
var router = express.Router();
const path = require('path');
const public = path.join(__dirname, 'public');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/', express.static(public));

module.exports = router;
