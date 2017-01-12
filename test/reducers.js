module.exports = () => {

const test = require(`tape`);

const { todoReducer } = require(`../app.js`);

test(`Does the reducer return empty state by default?`, (t) => {
  t.plan(2);
  t.deepEqual(todoReducer({}, {}), { visibilityFilter: `SHOW_ALL`, todos: [] },
    `returns an initial state when called without state`);
  t.deepEqual(todoReducer({}, {}),
    { todos: [], visibilityFilter: `SHOW_ALL` },
    `returns state when called with no action`);
})

test(`We can change visibility filters`, (t) => {
  t.plan(4);
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ALL` }),
    { todos: [], visibilityFilter: `SHOW_ALL` }),
    `We can set a null visibilityFilter to equal SHOW_ALL`
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_COMPLETED` }),
    { todos: [], visibilityFilter: `SHOW_COMPLETED` }),
    `We can set a null visibilityFilter to equal SHOW_COMPLETED`
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ACTIVE` }),
    { todos: [], visibilityFilter: `SHOW_ACTIVE` }),
    `We can set a null visibilityFilter to equal SHOW_ACTIVE`
  t.deepEqual(todoReducer({ visibilityFilter: `SHOW_ALL` },
    { type: `SET_VISIBILITY_FILTER`,    filter: `SHOW_ACTIVE` }),
    { todos: [], visibilityFilter: `SHOW_ACTIVE` }),
    `We can set a overwrite a previous filter`
})

test(`Test reducers add TODO route`, (t) => {
  t.plan(2);
  t.deepEqual(todoReducer({}, { type: `ADD_TODO`, text: `do` }),
    { todos: [{ text:`do`, completed: false }], visibilityFilter: `SHOW_ALL` },
    `returns a new state, with a todo`);
  t.deepEqual(todoReducer({ todos: [{ text:`do`, completed: false }] },
    { type: `ADD_TODO`, text: `do2` }),
    { todos: [{ text:`do`, completed: false }, { text:`do2`, completed: false }],
    visibilityFilter: `SHOW_ALL` },
    `can add a todo to an existing state`);
})

test(`Test toggle route`, (t) => {
  t.plan(2);
  t.deepEqual(todoReducer({ todos: [{ text:`do`, completed: false }] },
    { type: `TOGGLE_TODO`, index: 0 }),
    { todos: [{ text:`do`, completed: true }], visibilityFilter: 'SHOW_ALL' },
    `toggles a todo item from false to true`);
  t.deepEqual(todoReducer({ todos: [{ text:`do`, completed: true }] },
    { type: `TOGGLE_TODO`, index: 0 }),
    { todos: [{ text:`do`, completed: false }], visibilityFilter: 'SHOW_ALL' },
    `toggles a todo item from true to false`)
})

}
