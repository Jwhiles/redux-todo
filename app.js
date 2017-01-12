const { combineReducers } = require(`redux`);

// set up variables corresponding to our action names. avoids magic strings
// and helps the ide help us :)
const ADD_TODO = `ADD_TODO`
const TOGGLE_TODO = `TOGGLE_TODO`
const SET_VISIBILITY_FILTER = `SET_VISIBILITY_FILTER`

// visibility filters

const SHOW_ALL = `SHOW_ALL`
const SHOW_COMPLETED = `SHOW_COMPLETED`
const SHOW_ACTIVE = `SHOW_ACTIVE`

// functions to return actions - action creators.

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

const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

// reducers here

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
      break;
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([{
        text: action.text,
        completed: false
      }]);
      break;
    case TOGGLE_TODO:
      let todoArray = state.slice(0);
      todoArray[action.index].completed = !todoArray[action.index].completed;
      return todoArray;
      break;
    default:
      return state;
  }
}

const todoReducer = combineReducers({
  visibilityFilter,
  todos
})




module.exports = {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  todoReducer
}
