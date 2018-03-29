const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5abbc4ef9f2bcb2788bd39a5';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    console.log('Todo By Id', todo);
});