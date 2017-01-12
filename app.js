const { createStore } = require(`redux`);

// set up variables corresponding to our action names. avoids magic strings
// and helps the ide help us :)
const ADD_TODO = `ADD_TODO`
const TOGGLE_TODO = `TOGGLE_TODO`

// functions to return actions
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index
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
  toggleTodo,
  todoReducer
}
