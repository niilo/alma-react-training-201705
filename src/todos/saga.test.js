import { call, put } from 'redux-saga/effects'
import { todoWorkerSaga } from './saga'
import { startAddTodo, addTodo } from './actions'

const todo = {
  ïd: 345,
  name: 'take a break',
  done: false
}

const apiMethod = () => {}

test('addSaga works', () => {
  const saga = todoWorkerSaga(apiMethod, addTodo, startAddTodo(todo))

  expect(saga.next().value).toEqual(call(apiMethod, todo))
  expect(saga.next(todo).value).toEqual(put(addTodo(todo)))
  expect(saga.next().done).toEqual(true)
})
