var CommentsModel = require('../models/CommentsModel.js');

/**
 * CommentsController.js
 *
 * @description :: Server-side logic for managing Commentss.
 */
module.exports = {

    /**
     * CommentsController.list()
     */
    list: function (req, res) {
        CommentsModel.find(function (err, Commentss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Comments.',
                    error: err
                });
            }

            return res.json(Commentss);
        });
    },

    /**
     * CommentsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CommentsModel.findOne({_id: id}, function (err, Comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Comments.',
                    error: err
                });
            }

            if (!Comments) {
                return res.status(404).json({
                    message: 'No such Comments'
                });
            }

            return res.json(Comments);
        });
    },

    /**
     * CommentsController.create()
     */
    create: function (req, res) {
        var Comments = new CommentsModel({
			message : req.body.message,
			user : req.body.user,
            name : req.body.name,
			blog : req.body.blog,
			created_at : req.body.created_at,
			updated_at : req.body.updated_at,
			cls : req.body.cls
        });

        Comments.save(function (err, Comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Comments',
                    error: err
                });
            }

            return res.status(201).json(Comments);
        });
    },

    /**
     * CommentsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CommentsModel.findOne({_id: id}, function (err, Comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Comments',
                    error: err
                });
            }

            if (!Comments) {
                return res.status(404).json({
                    message: 'No such Comments'
                });
            }

            Comments.message = req.body.message ? req.body.message : Comments.message;
			Comments.user = req.body.user ? req.body.user : Comments.user;
			Comments.blog = req.body.blog ? req.body.blog : Comments.blog;
			Comments.name = req.body.name ? req.body.name : Comments.name;
			//Comments.replay = req.body.replay ? req.body.replay : Comments.replay;
			Comments.created_at = req.body.created_at ? req.body.created_at : Comments.created_at;
			Comments.updated_at = req.body.updated_at ? req.body.updated_at : Comments.updated_at;
			Comments.cls = req.body.cls ? req.body.cls : Comments.cls;
			
            Comments.save(function (err, Comments) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Comments.',
                        error: err
                    });
                }

                return res.json(Comments);
            });
        });
    },

    /**
     * CommentsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CommentsModel.findByIdAndRemove(id, function (err, Comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Comments.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
