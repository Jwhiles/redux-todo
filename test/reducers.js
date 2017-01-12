module.exports = () => {

const test = require(`tape`);

const { todoReducer } = require(`../app.js`);

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

}
