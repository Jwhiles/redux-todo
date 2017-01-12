const ADD_TODO = 'ADD_TODO'

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const todo = (state, action) => {

}

module.exports = {
  addTodo
}
