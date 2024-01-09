const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Please enter a task"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: String,
      required: [true, "User id is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todos", todoSchema);
