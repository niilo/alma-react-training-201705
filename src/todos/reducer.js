import { SET_TODOS } from './actionTypes'

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

    default:
      return state
  }
}
