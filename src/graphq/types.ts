import { gql } from 'apollo-server-express'

export default gql`

input Migration {
  id: ID!
  jobId: ID!
  name: String!
  data: String!
}

type Job {
  status: String!
  type: String!
  migrationId: ID!
  workerId: ID!
  jobId: ID!
  processId: ID!

}

type Query {
  hello: String
}

type Mutation {
  runMigration(migration: Migration!): Job!
}
`;
