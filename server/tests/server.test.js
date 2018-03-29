const except = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    text: 'First test todo'
}, {
    text: 'second test todo'
}];


beforeEach((done) => {
Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todo')
        .send({text})
        .expect(200)
        .expect((res) => {
            except(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            Todo.find().then((todos) => {
                except(todos.length).toBe(1);
                except(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    it('should not create todo with invalid data', (done) =>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if (err) {
                return done(err);
                
            }

          Todo.find().then((todos) => {
              except(todos.length).toBe(0);
              done();
          }).catch((e) => done(e));  
        });
    })
});