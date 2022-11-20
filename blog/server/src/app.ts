//tsc command  //to compile to destination
//place .env file in the dist root directory

//imports
import express from "express";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import { Sequelize } from "sequelize";

//initialzations
require("dotenv").config();
const app = express();
const PORT: string | undefined = process.env.PORT;
const MONGOURI: any = process.env["MONGOURI"];

//routes

//middleware
app.use([bodyParser.json]); //allows json to pass through post/put methods

app.listen(PORT, () => {
  //PORT Connection
  console.log("Server Running at PORT --> " + PORT);

  //mongoose Connection
  mongoose.connect(MONGOURI, () => {
    console.log("MONGO Connected");
  });

  //MYSQL Connection
  new Sequelize("User", "root", "", {
    host: "localhost",
    dialect: "mysql",
  })
    .authenticate()
    .then(() => {
      console.log("MYSQL Connected");
    });
});
