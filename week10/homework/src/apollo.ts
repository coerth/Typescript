import { ApolloServer, gql } from 'apollo-server-express';
import { expressMiddleware } from '@apollo/server/express4';
import app from "./app"

const typeDefs = gql `
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello World"
  }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

export const serverStart = async (server: any) => {
  await server.start()
  //server.applyMiddleware({ app })

  app.use("/graphql", expressMiddleware(server))
  
}

serverStart(server)
