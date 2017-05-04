import { call, takeEvery, put } from 'redux-saga/effects'

import { setTodos } from './actions'
import { FETCH_TODOS } from './actionTypes'
import { getTodos } from './api'

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
  yield [takeEvery(FETCH_TODOS, todoWorkerSaga, getTodos, setTodos)]
}
