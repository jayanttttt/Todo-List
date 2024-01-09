const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: [true, "Invalid number"],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
