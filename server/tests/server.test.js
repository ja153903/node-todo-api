const request = require('supertest');
const expect = require('expect');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

// testing lifecycle method
// we only do this to test our testing assumption
beforeEach((done) => {
  Todo.remove({}).then(() => done()); // this wipes out all our todos
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = `Test todo text`;

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        // This makes sure that something was added to the database
        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });
});
