const test = require('tape');

const todo = require('./app.js');

test('We can create add todo actions', (t) => {
  t.plan(1)
  t.deepEqual(todo.addTodo('do'), { type: 'ADD_TODO', text: 'do' }, 'correct text');
})
