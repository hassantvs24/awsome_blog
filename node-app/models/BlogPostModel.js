var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BlogPostSchema = new Schema({
	'title' : String,
	'content' : String,
	'author' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'UserModel'
	},
	'created_at' : Date,
	'updated_at' : Date
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
