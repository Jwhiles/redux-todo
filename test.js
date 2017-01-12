const test = require('tape');

const todo = require('./app.js');

test('We can create add todo actions', (t) => {
  t.plan(1)
  t.deepEqual(todo.addTodo('do'), { type: 'ADD_TODO', text: 'do' }, 'correct text');
})

test('Does the reducer return empty state by default?', (t) => {
  t.plan(3);
  t.deepEqual(todo.todoReducer(), {}, 'returns a bare object');
  t.deepEqual(todo.todoReducer({}), {},
    'returns state when called with no action');
  t.deepEqual(todo.todoReducer({ state: 'state' }), { state: 'state' },
    'returns state when called with no action')

})
