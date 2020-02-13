import { runMigration } from '../jobs'

const hello = (): string => 'Hello world!'

const Query = {
  hello
}

const Mutation = {
  runMigration
}

export default {
  Query,
  Mutation
}
