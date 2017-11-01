const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = "59f90bb405c7cb016452d9e0";

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Mongoose converts it to an ObjectId automatically
// you get all instances of the specified parameter
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(`Todos:`, todos);
// }, (e) => {
//   console.log(e);
// });

// returns the first one that matches the query
// but since we're querying by id, there is only 1
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo: ${todo}`);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log(`Todo: ${todo}`);
}).catch((e) => console.log(e));
