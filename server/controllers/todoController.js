const asyncHandler = require("express-async-handler");
const TodoModel = require("../models/todoModel");

const getTodos = asyncHandler(async (req, res) => {
  const { user_id } = req.body;
  const todo = await TodoModel.find({ user_id: user_id });
  res.status(200).json(todo);
});

const createTodo = asyncHandler(async (req, res) => {
  const { task, user_id } = req.body;
  if (!task || !user_id) {
    res.status(400);
    throw new Error("Task cannot be empty");
  }
  await TodoModel.create({
    task,
    user_id,
  });
  const updatedTodoList = await TodoModel.find({ user_id: user_id });
  res.status(201).json(updatedTodoList);
});

const updateTodo = asyncHandler(async (req, res) => {
  const id = await TodoModel.findById(req.params.id);
  if (!id) {
    res.status(404);
    throw new Error("No item found from this id");
  }
  const data = await TodoModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  const updatedTodoList = await TodoModel.find({ user_id: data.user_id });
  res.status(200).json(updatedTodoList);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await TodoModel.findById(req.body.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  const data = await TodoModel.deleteOne({ _id: req.body.id });
  const updatedTodoList = await TodoModel.find({ user_id: data.user_id });
  res.status(200).json(updatedTodoList);
});

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
