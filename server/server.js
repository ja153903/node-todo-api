const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

// this allows us to send JSON over to our server.
app.use(bodyParser.json());

// Now we want to configure the POST route
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  // save to database and handle promise
  todo.save().then((doc) => {
    res.send(doc);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }).catch((e) => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log(`Started on port 3000`);
});

module.exports = { app };
