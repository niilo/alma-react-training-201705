import { todoWatcherSaga } from './todos/saga'

export default function * rootSaga () {
  yield [todoWatcherSaga()]
}
