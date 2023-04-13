import app from "./src/app"
import * as dotenv from "dotenv"
dotenv.config({path: './config.env'});
import mongoose from "mongoose";
import { ApolloServer, gql } from 'apollo-server-express';
import { expressMiddleware } from '@apollo/server/express4';


const DB = process.env.DATABASE_DEV!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!,
);

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

export const serverStart = async (server: ApolloServer) => {
  await server.start()
  server.applyMiddleware({ app })
}

serverStart(server)



const port = process.env.PORT;
mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});

