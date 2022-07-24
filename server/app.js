const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const authRoutes = require("./src/v1/routes/authRoutes");



// const route = require('./src/v1/routes/test');

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*Rotuer*/

app.use("/", authRoutes);

module.exports = app;
