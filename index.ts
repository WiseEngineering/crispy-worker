import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './src/schema/types'
import resolvers from './src/schema/resolvers'

import config from './src/config'

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

const port = config.server.port;

// TODO: put all routes inside src. Leave it as entry point
server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

