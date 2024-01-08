const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const TodoModel = require("./models/todo");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

connectDb();

app.use("/todo", require("./routes/todoRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
