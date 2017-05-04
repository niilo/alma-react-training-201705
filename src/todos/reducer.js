import { SET_TODOS, ADD_TODO, TOGGLE_TODO } from './actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TODOS: {
      const todos = action.payload
      return todos.reduce(
        (acc, todo) => ({
          ...acc,
          [todo.id]: todo
        }),
        {}
      )
    }
    case ADD_TODO: {
      const todo = action.payload
      return { ...state, [todo.id]: todo }
    }
    case TOGGLE_TODO: {
      const id = action.payload
      const todo = state[id]
      todo.done = !todo.done
      return { ...state, [id]: todo }
    }

    default:
      return state
  }
}
