const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log(`Connected to MongoDB server`);

  // STRING NAME OF COLLECTION YOU WANT TO INSERT INTO
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //      return console.log('Unable to insert todo', err);
  //   }
  //   // ops attribute stores all the docs
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: "Jaime",
  //   age: 23,
  //   location: "Forest Hills, New York"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close(); // closes connection
});
