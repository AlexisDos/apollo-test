// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServer, gql, PubSub } = require('apollo-server');
// const { makeExecutableSchema } = require('graphql-tools');
// const { SubscriptionServer } = require('subscriptions-transport-ws');
// // const bodyParser = require('body-parser');
// const schema = require('./controllers/user/schema');
const UserDocument = require('./collections/').User; 

// const indexRouter = require('./routes/index');
// const Users = require('./routes/users');

// const  app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



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





const server = new ApolloServer({ 
	typeDefs, resolvers,
	subscriptions: {
    onConnect: () => console.log('Connected to websocket'),
  },
  context: async ({ req, connection }) => {
  	console.log(req)
  	return;
  },
});

const port = normalizePort(process.env.PORT || '3000');

server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



// server.applyMiddleware({ app });
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// app.use('/users',Users);
// app.use('/', indexRouter);

// app.use('/users', usersRouter);

// module.exports = app;
