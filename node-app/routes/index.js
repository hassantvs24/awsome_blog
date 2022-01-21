var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
 * POST
 */
router.post('/login', AuthController.login);

/*
 * POST
 */
router.post('/register', AuthController.register);

module.exports = router;
