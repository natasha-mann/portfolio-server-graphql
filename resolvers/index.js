const repos = require("./repos");

const resolvers = {
  Query: {
    repos,
  },
};

module.exports = resolvers;
