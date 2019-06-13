require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const api = require('./utils/api')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: ({ request }) => ({ api, ...request })
})

// eslint-disable-next-line
server.start({ port: 4001 },() => console.log(`Server is running on http://localhost:4001`))
