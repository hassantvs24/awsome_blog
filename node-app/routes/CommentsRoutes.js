var express = require('express');
var router = express.Router();
var CommentsController = require('../controllers/CommentsController.js');

/*
 * GET
 */
router.get('/', CommentsController.list);

/*
 * GET
 */
router.get('/:id', CommentsController.show);

/*
 * POST
 */
router.post('/', CommentsController.create);

/*
 * PUT
 */
router.put('/:id', CommentsController.update);

/*
 * DELETE
 */
router.delete('/:id', CommentsController.remove);

module.exports = router;
