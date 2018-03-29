const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then ((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({})

Todo.findOneAndRemove({_id: '5abcafcba66a97f6ab5fab74'}).then((todo) => {

});  
    
Todo.findByIdAndRemove('5abcaf2ca66a97f6ab5fab31').then((todo) => {
    console.log(todo);
});
