import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'

import { setTodos, addTodo } from './actions'
import { FETCH_TODOS, ADD_TODO_START } from './actionTypes'
import { getTodos, addTodo as insertTodo } from './api'

export function * todoWorkerSaga (apiMethod, successActionCreator, action) {
  try {
    const result = yield call(apiMethod, action.payload)
    yield put(successActionCreator(result))
  } catch (err) {
    // here should be error action creator...
    console.error('async op failed:', err)
  }
}

export function * todoWatcherSaga () {
  yield [
    takeEvery(FETCH_TODOS, todoWorkerSaga, getTodos, setTodos),
    takeLatest(ADD_TODO_START, todoWorkerSaga, insertTodo, addTodo)
  ]
}
