const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// this removes everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove().then(()=>{

// });

Todo.findByIdAndRemove("5a5537dab82e631022d0e242").then((todo) => {
    console.log(todo);
})