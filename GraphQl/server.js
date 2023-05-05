import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";

/**
 * where is connect it with apollo server with plugins that will enbale the playground on servef url
 */

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

/**
 * insall nodemon to  auto start sever whenever we changes something in code
 */

server.listen().then((url) => console.log("server Ready at ", url));
