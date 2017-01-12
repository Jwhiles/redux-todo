const { createStore } = require(`redux`);

const { todoReducer, addTodo, toggleTodo, setVisibilityFilter } = require(`./app.js`);

let store = createStore(todoReducer);
