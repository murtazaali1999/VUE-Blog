"use strict";
//tsc command  //to compile to destination
//place .env file in the dist root directory
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const sequelize_1 = require("sequelize");
//initialzations
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const MONGOURI = process.env["MONGOURI"];
//routes
//middleware
app.use([body_parser_1.default.json]); //allows json to pass through post/put methods
app.listen(PORT, () => {
    //PORT Connection
    console.log("Server Running at PORT --> " + PORT);
    //mongoose Connection
    mongoose_1.default.connect(MONGOURI, () => {
        console.log("MONGO Connected");
    });
    //MYSQL Connection
    new sequelize_1.Sequelize("User", "root", "", {
        host: "localhost",
        dialect: "mysql",
    })
        .authenticate()
        .then(() => {
        console.log("MYSQL Connected");
    });
});
