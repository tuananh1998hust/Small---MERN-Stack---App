// Config env
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Route Api/todoitems
const todoitems = require('./api/routes/todoitems');

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log(err));

app.use('/api/todoitems', todoitems);

app.listen(port, () => console.log(`server is starting on port ${port}`));