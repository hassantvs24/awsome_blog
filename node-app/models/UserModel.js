require('dotenv').config();
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var jwt = require('jsonwebtoken');

var UserSchema = new Schema({
	'name' : { type: String, required: true },
	'email' : { type: String, required: true, unique: true },
	'password' : { type: String, required: true },
	'token' : String,
	'avatar' : { type: String, default: null },
	'created_at' : { type: Date, default: Date.now },
	'updated_at' : { type: Date, default: Date.now }
});

UserSchema.methods.generateAuthToken = function(){
	const token = jwt.sign({ user_id: this._id, email: this.email }, process.env.TOKEN_KEY, {expiresIn:  process.env.TOKEN_EXP});
	return token;
  }

module.exports = mongoose.model('User', UserSchema);
