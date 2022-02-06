var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentsSchema = new Schema({
	'message' : String,
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'UserModel'
	},
	'name': String,
	'blog' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'BlogPostModel'
	},
	'replay' : {
		'message' : String,
		'user_id' : {
			type: Schema.Types.ObjectId,
			ref: 'UserModel'
	   },
	   'name': String,
	   'created_at' : { type: Date, default: Date.now },
	   'updated_at' : { type: Date, default: Date.now }
	},
	'created_at' : { type: Date, default: Date.now },
	'updated_at' : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comments', CommentsSchema);
