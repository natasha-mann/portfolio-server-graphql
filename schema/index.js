const { gql } = require("apollo-server");

const typeDefs = gql`
  type Repo {
    name: String!
    description: String
    gitHubUrl: String!
    homepage: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    repos(sortBy: String, top: Int): [Repo]
  }
`;

module.exports = typeDefs;
