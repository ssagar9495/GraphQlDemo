import { user, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";

/**
 * resolver that have all the operation regarding query and its gave the response to it
 */

const resolvers = {
  Query: {
    users: () => user,
    user: (parent, args) => user.find((user) => user.id === args.id),
    quotes: () => {
      const data = quotes.map((qu) => {
        const matchingObj = user.find((usr) => usr.id === qu.by);
        if (matchingObj) {
          if (matchingObj) {
            return { firstName: matchingObj.firstName, ...qu };
          }
        }
      });
      return data;
    },

    quote: (parent, args) => quotes.filter((quot) => quot.by === args.by),
  },
  User: {
    quotes: (usr) => quotes.filter((quote) => quote.by == usr.id),
  },
  Mutation: {
    signUpUserDummy: (parent, { userNew }) => {
      const id = randomBytes(5).toString("hex");
      user.push({
        id,
        ...userNew,
      });
      return user.find((usr) => usr.id === id);
    },
  },
};
export default resolvers;
