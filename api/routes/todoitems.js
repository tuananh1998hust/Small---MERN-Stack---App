const express = require('express');
const router = express.Router();

// todoitems Controller
const Controller = require('../controller/todoitems');

// @route   GET api/todoitems
// @desc    Get All Items
// @access  Public
router.get('/', Controller.getItems);

// @route   POSTT api/todoitems
// @desc    Create new Item
// @access  Public
router.post('/', Controller.createItem);

// @route   DELETE api/todoitems
// @desc    Delete Item
// @access  Public
router.delete('/:id', Controller.deleteItem);

module.exports = router;