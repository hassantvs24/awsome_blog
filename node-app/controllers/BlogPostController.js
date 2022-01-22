var BlogpostModel = require('../models/BlogPostModel.js');

/**
 * BlogPostController.js
 *
 * @description :: Server-side logic for managing BlogPosts.
 */
module.exports = {

    /**
     * BlogPostController.list()
     */
    list: function (req, res) {
        BlogpostModel.find(function (err, BlogPosts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BlogPost.',
                    error: err
                });
            }

            return res.json(BlogPosts);
        });
    },

    /**
     * BlogPostController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BlogpostModel.findOne({_id: id}, function (err, BlogPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BlogPost.',
                    error: err
                });
            }

            if (!BlogPost) {
                return res.status(404).json({
                    message: 'No such BlogPost'
                });
            }

            return res.json(BlogPost);
        });
    },

    /**
     * BlogPostController.create()
     */
    create: function (req, res) {
        var BlogPost = new BlogpostModel({
			title : req.body.title,
			content : req.body.content,
			author : req.body.author,
			created_at : req.body.created_at,
			updated_at : req.body.updated_at
        });

        BlogPost.save(function (err, BlogPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating BlogPost',
                    error: err
                });
            }

            return res.status(201).json(BlogPost);
        });
    },

    /**
     * BlogPostController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BlogpostModel.findOne({_id: id}, function (err, BlogPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BlogPost',
                    error: err
                });
            }

            if (!BlogPost) {
                return res.status(404).json({
                    message: 'No such BlogPost'
                });
            }

            BlogPost.title = req.body.title ? req.body.title : BlogPost.title;
			BlogPost.content = req.body.content ? req.body.content : BlogPost.content;
			BlogPost.author = req.body.author ? req.body.author : BlogPost.author;
			BlogPost.created_at = req.body.created_at ? req.body.created_at : BlogPost.created_at;
			BlogPost.updated_at = req.body.updated_at ? req.body.updated_at : BlogPost.updated_at;
			
            BlogPost.save(function (err, BlogPost) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating BlogPost.',
                        error: err
                    });
                }

                return res.json(BlogPost);
            });
        });
    },

    /**
     * BlogPostController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BlogpostModel.findByIdAndRemove(id, function (err, BlogPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the BlogPost.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
