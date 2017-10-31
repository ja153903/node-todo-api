const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log(`Connected to MongoDB server`);

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("59f27c5135a381c1da460a56")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // This returns a promise
  db.collection('Users').findOneAndUpdate({
    name: "Jenny"
  }, {
    $set: {
      name: "Jen"
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close(); // closes connection
});
