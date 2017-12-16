//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //why use return: if error occurs, this fuction will stop
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    console.log(result); // result: { n: 3, ok: 1 }, means 3 records deleted
  });*/

  //deleteOne
  //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
  //  console.log(result);
  //});

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) =>{
    console.log(result);
  });

  //insertOne
  /*db.collection('Todos').insertOne({
    text: 'Eat lunch',
    completed: false
   }).then((result) =>{
    console.log(result); // result: { n: 3, ok: 1 }, means 3 records deleted
  });*/
  //db.close();
});
