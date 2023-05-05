import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by
      firstName
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    user(id: $userId) {
      id
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`;
