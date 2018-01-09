const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set it up to use promises instead of callbacks

mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'
mongoose.connect(mongo_uri);

module.exports = { mongoose }
