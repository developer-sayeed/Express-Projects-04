const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const pagerouter = require("./routes/pagerouter.js");
const expressLayout = require("express-ejs-layouts")

//  Enviroment Varibale

dotenv.config();
const port = process.env.port || 4000;

//  Express init

const app = express();

// Data manage

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressLayout)

//  Express Folder Static

app.use(express.static("./public"));


// Routing

app.use(pagerouter);


// EJS Init 

app.set("view engine", "ejs")

// server Listen

app.listen(port, (req, res) => {
  console.log(`server is runing port ${port}`.bgGreen.black);
});
