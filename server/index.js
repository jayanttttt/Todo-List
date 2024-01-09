const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

connectDb();

app.use("/todo", require("./routes/todoRoutes"));
app.use("/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
