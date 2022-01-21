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

    register: async function (req, res) {
        //Encrypt user password
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);

        var User = new UserModel({
			name : req.body.name,
			email : req.body.email.toLowerCase(),
			password : encryptedPassword
        });

        await User.save(async function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }

                // Create token
                let email =  User.email;
                const tokens = jwt.sign({ user_id: User._id, email }, process.env.TOKEN_KEY, {expiresIn: "2h"});
                
                //save token
               User.token = tokens;
               //UserModel.findByIdAndUpdate(User._id, { token: User.token })


            return res.status(201).json(User);
        });
    },

    login: async function (req, res) {
        
        try {
            // Get user input
            const { email, password } = req.body;
        
            // Validate user input
            if (!(email && password)) {
              res.status(400).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await UserModel.findOne({ email });
        
            if (user && (await bcrypt.compare(password, user.password))) {
              // Create token
              const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
        
              // save user token
              user.token = token;
        
              // user
              res.status(200).json(user);
            }
            res.status(400).send("Invalid Credentials");
          } catch (err) {
            console.log(err);
          }
    }
};