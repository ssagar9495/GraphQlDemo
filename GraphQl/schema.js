import { gql } from "apollo-server";

/**
 * Schema that will tell which query we have with its type
 */
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quotes]
    quote(by: ID!): [Quotes]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quotes]
  }

  type Quotes {
    name: String
    by: ID
    firstName: String
  }

  type Mutation {
    signUpUserDummy(userNew: UserInput!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
