const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log(`Connected to MongoDB server`);

  // find returns a mongodb cursor
  // db.collection('Todos').find({
  //   _id: new ObjectID('59f11a096ba47310855ec8a6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({
    name: "Jaime"
  }).count().then((count) => {
    console.log(`User with name Jaime count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  // db.close(); // closes connection
});
