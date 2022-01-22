require('dotenv').config();
var UserModel = require('../models/UserModel.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UserController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },

    /**
     * UserController.create()
     */
    create: async function (req, res) {
        const {name, email, password} = req.body;
        //Encrypt user password
        let encryptedPassword = await bcrypt.hash(password, 10);

        const oldUser = await UserModel.findOne({ email });

        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }

        var User = new UserModel({
			name : name,
			email : email.toLowerCase(),
			password : encryptedPassword
        });

        await User.save(function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }
            return res.status(201).json(User);
        });
        
    },


    /**
     * UserController.update()
     */
    update: async function (req, res) {
        var id = req.params.id;
        let encryptedPassword = await bcrypt.hash(req.body.password, 10);

        await UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.name = req.body.name ? req.body.name : User.name;
			User.email = req.body.email ? req.body.email : User.email;
			User.password = req.body.password ? encryptedPassword : User.password;
			User.avatar = req.body.avatar ? req.body.avatar : User.avatar;
			User.created_at = req.body.created_at ? req.body.created_at : User.created_at;
			User.updated_at = req.body.updated_at ? req.body.updated_at : User.updated_at;
			
            User.save(function (err, User) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UserModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
