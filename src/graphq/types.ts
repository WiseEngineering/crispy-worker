import { gql } from 'apollo-server-express'

export default gql`

input Migration {
  id: ID!
  name: String!
  data: String!
}

type Job {
  status: String!
  type: String!
  migrationId: Int!
  workerId: Int!

}

type Query {
  hello: String
}

type Mutation {
  runMigration(migration: Migration!): Job!
}
`;
