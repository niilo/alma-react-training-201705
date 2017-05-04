import {
  SET_TODOS,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODOS
} from './actionTypes'

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos
})

export const startAddTodo = todo => ({
  type: ADD_TODO_START,
  payload: todo
})

export const addTodo = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: todo
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
})

export const fetchTodos = () => ({
  type: FETCH_TODOS
})
