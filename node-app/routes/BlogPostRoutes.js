var express = require('express');
var router = express.Router();
var BlogPostController = require('../controllers/BlogPostController.js');
const auth = require("../middleware/auth");

/*
 * GET
 */
router.get('/', BlogPostController.list);

/*
 * GET
 */
router.get('/:id', BlogPostController.show);

/*
 * POST
 */
router.post('/', auth, BlogPostController.create);

/*
 * PUT
 */
router.put('/:id', auth, BlogPostController.update);

/*
 * DELETE
 */
router.delete('/:id', auth, BlogPostController.remove);

module.exports = router;
