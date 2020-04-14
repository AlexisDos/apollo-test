const { connection, Schema } = require('../helpers/mongo');

module.exports = connection.model('User', 
	new Schema({
		username: { type: String, required: true },
		name: { type: String, required: true },
		password: { type: String, required: true },
		age: { type: String, required: false }
	},{
		strict: false
	})
);
