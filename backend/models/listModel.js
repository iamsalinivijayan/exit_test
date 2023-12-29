// models/listModel.js
const mongoose = require('mongoose');

// Define a schema for the todo item
const todoSchema = new mongoose.Schema({
  description: String,
});

// Define a model based on the schema
const Todo = mongoose.model('Todo', todoSchema);

exports.getItems = async function (listType) {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

exports.addItem = async function (newItem) {
  try {
    const todo = new Todo({
      description: newItem,
    });
    await todo.save();
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};
