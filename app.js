const { createStore } = require(`redux`);

const ADD_TODO = `ADD_TODO`

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const todoReducer = (state = {}, action = {}) => {
  switch(action.type) {
    case `ADD_TODO`:
      const newState = Object.assign({}, state, { todo: action.text })
      return newState;
    default:
      return state;
  }
}


module.exports = {
  addTodo,
  todoReducer
}
