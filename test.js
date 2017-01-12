const test = require(`tape`);

const { addTodo, todoReducer } = require(`./app.js`);

test(`We can create add todo actions`, (t) => {
  t.plan(1);
  t.deepEqual(addTodo(`do`), { type: `ADD_TODO`, text: `do` },
    `correct text`);
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
