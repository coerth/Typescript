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
  console.log(`App running on port http://localhost:${port}`);
});

