module.exports = () => {

const test = require(`tape`);

const { addTodo, toggleTodo, setVisibilityFilter } = require(`../app.js`);


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

test(`We can create visibility filter actions`, (t) => {
  t.plan(3);
  t.deepEqual(setVisibilityFilter(`SHOW_ALL`),
    { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ALL` },
    `returns correct filter for show all`);
  t.deepEqual(setVisibilityFilter(`SHOW_COMPLETED`),
    { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_COMPLETED` },
    `returns correct filter for show completed`);
  t.deepEqual(setVisibilityFilter(`SHOW_ACTIVE`),
    { type: `SET_VISIBILITY_FILTER`, filter: `SHOW_ACTIVE` },
    `returns correct filter for show active`);


})
}
