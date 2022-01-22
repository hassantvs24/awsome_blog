var express = require('express');
var router = express.Router();
var BlogPostController = require('../controllers/BlogPostController.js');

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
router.post('/', BlogPostController.create);

/*
 * PUT
 */
router.put('/:id', BlogPostController.update);

/*
 * DELETE
 */
router.delete('/:id', BlogPostController.remove);

module.exports = router;
