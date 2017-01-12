const { createStore } = require(`redux`);

const ADD_TODO = `ADD_TODO`

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const todoReducer = (state = {}, action = {}) => {
  console.log(state)
  switch(action.type) {
    `ADD_TODO`

    default:
      return state;
  }
}


module.exports = {
  addTodo,
  todoReducer
}
