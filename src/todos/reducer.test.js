import * as a from './actions'
import reducer from './reducer'

const todo1 = {
  id: '1',
  name: 'Go to gym',
  done: true
}

const todo2 = {
  id: '2',
  name: 'Learn some jest',
  done: false
}

test('set list of todos', () => {
  const state = reducer(undefined, a.setTodos([todo1, todo2]))
  expect(state).toEqual({
    [todo1.id]: todo1,
    [todo2.id]: todo2
  })
})
