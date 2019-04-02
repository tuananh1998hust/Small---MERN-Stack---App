const mongoose = require('mongoose');

// create TodoItem Schema
const TodoItemSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
  date: { type: Date, default: Date.now }
});

// TodoItem Model
const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;