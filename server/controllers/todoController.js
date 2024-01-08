const asyncHandler = require("express-async-handler");
const TodoModel = require("../models/todo");

const getTodos = asyncHandler(async (req, res) => {
  const todo = await TodoModel.find();
  res.status(200).json(todo);
});

const createTodo = asyncHandler(async (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(400);
    throw new Error("Task cannot be empty");
  }
  await TodoModel.create({
    task,
  });
  const updatedTodoList = await TodoModel.find();
  res.status(201).json(updatedTodoList);
});

const updateTodo = asyncHandler(async (req, res) => {
  const id = await TodoModel.findById(req.params.id);
  if (!id) {
    res.status(404);
    throw new Error("No item found from this id");
  }
  await TodoModel.findOneAndUpdate({ _id: req.params.id }, req.body);
  const updatedTodoList = await TodoModel.find();
  res.status(200).json(updatedTodoList);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await TodoModel.findById(req.body.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  await TodoModel.deleteOne({ _id: req.body.id });
  const updatedTodoList = await TodoModel.find();
  res.status(200).json(updatedTodoList);
});

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
