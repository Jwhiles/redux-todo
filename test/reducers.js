module.exports = () => {

const test = require(`tape`);

const { todoReducer } = require(`../app.js`);

test(`Does the reducer return empty state by default?`, (t) => {
  t.plan(3);
  t.deepEqual(todoReducer(), { visibilityFilter: `SHOW_ALL`, todos: [] },
    `returns an initial state when called without state`);
  t.deepEqual(todoReducer({}), {},
    `returns state when called with no action`);
  t.deepEqual(todoReducer({ state: `state` }), { state: `state` },
    `returns state when called with no action`);
})

test(`We can change visibility filters`, (t) => {
  t.plan(4);
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ALL` }),
    { visibilityFilter: `SHOW_ALL` }),
    `We can set a null visibilityFilter to equal SHOW_ALL`
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_COMPLETED` }),
    { visibilityFilter: `SHOW_COMPLETED` }),
    `We can set a null visibilityFilter to equal SHOW_COMPLETED`
  t.deepEqual(todoReducer({}, { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ACTIVE` }),
    { visibilityFilter: `SHOW_ACTIVE` }),
    `We can set a null visibilityFilter to equal SHOW_ACTIVE`
  t.deepEqual(todoReducer({ visibilityFilter: `SHOW_ALL` },
    { type: `SET_VISIBILITY_FILTER`,    filter: `SHOW_ACTIVE` }),
    { visibilityFilter: `SHOW_ACTIVE` }),
    `We can set a overwrite a previous filter`
})

test(`Test reducers add TODO route`, (t) => {
  t.plan(2);
  t.deepEqual(todoReducer({}, { type: `ADD_TODO`, text: `do` }),
    { todos: [{ text:`do`, completed: false }] },
    `returns a new state, with a todo`);
  t.deepEqual(todoReducer({ todos: [{ text:`do`, completed: false }] },
    { type: `ADD_TODO`, text: `do2` }),
    { todos: [{ text:`do`, completed: false }, { text:`do2`, completed: false }] },
    `returns a new state, with a todo`);
})

}
