// <reference path="../types/express.d.ts"/>

import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});
import express from "express";
import morgan from 'morgan';

import personRouter from '../routes/personRoute';
import mechanicRouter from "../routes/mechanicRoute"
import addressRouter from "../routes/addressRoute"
import { Request, Response, NextFunction } from 'express';
import {globalErrorHandler} from "../handlers/errorHandler"
import cors from "cors"
import {Person, Address} from "../types/types"
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// The following 2 imports are for reliable shutdown of the server.
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import Query from '.././graphql/resolvers/query';
import Mutation from '.././graphql/resolvers/Mutation'
import typeDefs from '../graphql/graphql_schemas';

const app = express();

const httpServer = http.createServer(app);
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use('/graphql', 
cors<cors.CorsRequest>(),
express.json(),
expressMiddleware(server));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(cors())
app.use(express.json()); // Body parser for JSON data
app.use("/api/v1/people", personRouter)
app.use("/api/v1/mechanic", mechanicRouter)
app.use("/api/v1/address", addressRouter)
app.use(globalErrorHandler)

export default app