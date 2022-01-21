var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');
const auth = require("../middleware/auth");


/*
 * GET
 */
router.get('/', auth, UserController.list);

/*
 * GET
 */
router.get('/:id', auth, UserController.show);

/*
 * POST
 */
router.post('/', auth, UserController.create);


/*
 * PUT
 */
router.put('/:id', auth, UserController.update);

/*
 * DELETE
 */
router.delete('/:id', auth, UserController.remove);

module.exports = router;
