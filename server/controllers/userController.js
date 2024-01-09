const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { number, password } = req.body;
  if (!number || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ number: number });
  if (userAvailable) {
    res.status(404);
    throw new Error("User already exists");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    number,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ user_id: user.id });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { number, password } = req.body;
  if (!number || !number) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ number: number });
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ user_id: user.id });
  } else {
    res.status(400);
    throw new Error("Number or password is not valid");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
