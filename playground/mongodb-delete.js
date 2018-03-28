// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Users').deleteMany({Name: 'Aiden'});
  // });
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch' }).then((result) =>  {
//   console.log(result);
// });
//findOneAndDelete

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5abb8369bc09580a188592d3")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2))
});

});