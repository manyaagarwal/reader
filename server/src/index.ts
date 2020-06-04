import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ host: "0.0.0.0", port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
