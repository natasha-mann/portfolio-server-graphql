const { gql } = require("apollo-server");

const typeDefs = gql`
  type Repo {
    name: String!
    description: String
    gitHubUrl: String!
    homepage: String
    createdAt: String!
    updatedAt: String!
    branch: String!
    size: Int!
  }

  type Query {
    repos(username: String!, sortBy: String, number: Int, page: Int): [Repo]
  }
`;

module.exports = typeDefs;
