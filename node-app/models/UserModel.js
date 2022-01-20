var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'name' : { type: String, required: true },
	'email' : { type: String, required: true },
	'password' : { type: String, required: true },
	'avatar' : String,
	'created_at' : { type: Date, default: Date.now },
	'updated_at' : { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
