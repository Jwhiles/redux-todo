const test = require(`tape`);

const { addTodo, todoReducer, toggleTodo } = require(`./app.js`);

test(`We can create add todo actions`, (t) => {
  t.plan(1);
  t.deepEqual(addTodo(`do`), { type: `ADD_TODO`, text: `do` },
    `correct text and type`);
})

test(`We can create toggle todo actions`, (t) => {
  t.plan(2);
  t.deepEqual(toggleTodo(1), { type: `TOGGLE_TODO`, index: 1 },
    `correct type and index`);
  t.deepEqual(toggleTodo(5), { type: `TOGGLE_TODO`, index: 5 },
    `correct type and index`);
})

test(`Does the reducer return empty state by default?`, (t) => {
  t.plan(3);
  t.deepEqual(todoReducer(), {},
    `returns a bare object`);
  t.deepEqual(todoReducer({}), {},
    `returns state when called with no action`);
  t.deepEqual(todoReducer({ state: `state` }), { state: `state` },
    `returns state when called with no action`);
})

test(`Test reducers add TODO route`, (t) => {
  t.plan(2);
  t.deepEqual(todoReducer({}, { type: `ADD_TODO`, text: `do` }), { todo: `do` },
    `returns a new state, with a todo`);
  t.deepEqual(todoReducer({ todo: `don't` }, { type: `ADD_TODO`, text: `do` }),
    { todo: `do` }, `should overwrite a previous todo`);
})
