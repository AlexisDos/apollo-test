const UserDocument = require('./../../collections/').User; 
const { badRequest, formatError, fieldsFormatError } = require('../../helpers/response')._Error;
const { PubSub } = require('apollo-server-express');

const pubsub = new PubSub();

const NEW_USER= 'NEW_USER';

const resolvers = {
	Subscription: {
    newUser: {
      subscribe: () => {
      	console.log('<<<<<<<<<<<<<<<<');
      	return pubsub.asyncIterator([NEW_USER])
      }
    },
  },
	Query: {
		hello: () => "Hello world!",
		singUp(root,args) {
			return "args";
		}, 
		findAll: async () => {
			try {
				return await UserDocument.find();
			}catch(e) {
				return null;
			}
		}
	},
	Mutation: {
		create: async (_,{ input }) => {
			try {
				const userCreated = await UserDocument.create(input);
				pubsub.publish(NEW_USER, { newUser: userCreated });
				return userCreated;

				// throw new Error(formatError('simon','algo'))
			}catch(e) {
				return new Error(e.message);
			}
		}
	}
}

module.exports = resolvers;