const { GraphQLError } = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = require('../controllers/user/schema');

const Users = graphqlHTTP({
	graphiql: true,
	schema,
	syntaxError: error => {
		console.log(error);
		return error;
	}
	// customFormatErrorFn: error => {
	// 	// const a = new GraphQLError();
	// 	// console.log(a);
	// 	console.log('>>>>>>>>');
	// 	return {
	// 		message: error.message, statusCode: 400
	// 	};
	// }
})

module.exports = Users;
