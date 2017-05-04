import { SET_TODOS, ADD_TODO } from './actionTypes'

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos
})

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})
