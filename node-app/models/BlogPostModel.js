var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BlogPostSchema = new Schema({
	'title' : String,
	'content' : String,
	'author' : {
		'_id': {
			type: Schema.Types.ObjectId,
			ref: 'UserModel'
		},
		'name': String,
		'email': String
	},
	'created_at' : { type: Date, default: Date.now },
	'updated_at' : { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
