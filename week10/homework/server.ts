import app from "./src/app"
import * as dotenv from "dotenv"
dotenv.config({path: './config.env'});
import mongoose from "mongoose";

import { expressMiddleware } from '@apollo/server/express4';

const DB = process.env.DATABASE_DEV!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!,
);

const port = process.env.PORT;
mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

app.listen(port, () => {
  console.log(`Graphql running on port http://localhost:${port}/graphql`);
  console.log(`Person Api running on port http://localhost:${port}/api/v1/people`);
  console.log(`Address Api running on port http://localhost:${port}/api/v1/address`);
  console.log(`Mechanic Api running on port http://localhost:${port}/api/v1/mechanic`);
});

