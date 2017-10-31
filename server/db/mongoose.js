const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set it up to use promises instead of callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose }
