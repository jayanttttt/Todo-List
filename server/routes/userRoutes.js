const express = require("express");
const router = express.Router();
const validteToken = require("../middleware/validateToken");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login", validteToken, currentUser);

module.exports = router;
