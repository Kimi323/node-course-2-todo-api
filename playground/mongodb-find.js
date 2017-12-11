//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //why use return: if error occurs, this fuction will stop
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').find({
      _id: new ObjectID('5a2e9c7ec4fd241c3c159f5d')
    }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
