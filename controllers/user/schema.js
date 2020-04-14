const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Subscription {
    newUser: User
  }

	type Query {
		hello: String
		singUp(name: String): String
		findAll: [User]
	}
	type Mutation {
		create(input: UserData): User!
	}
	type User {
		_id: ID
		username: String!
		name: String!
		password: String!
		age: Int
	}
	input UserData {
		username: String!
		name: String!
		password: String!
		age: Int
	}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });