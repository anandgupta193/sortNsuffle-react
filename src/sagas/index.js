import { fork } from 'redux-saga/effects';
import ShuffleSaga from './ShuffleSaga';

// List of all sagas combined as root sagas
export default function* rootSagas() {
  yield* [fork(ShuffleSaga)];
}
