const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/get").post(getTodos);
router.route("/create").post(createTodo);
router.route("/update/:id").put(updateTodo);
router.route("/delete").post(deleteTodo);

module.exports = router;
