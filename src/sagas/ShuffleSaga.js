import { takeLatest, put, call } from 'redux-saga/effects';
import { SHUFFLE, SHUFFLE_SUCCESS } from '../actionTypes/ShuffleActionTypes';
import shuffle from '../utils/Shuffle';

function* performShuffle() {
  const shuffledArray = yield call(shuffle);
  yield put({ type: SHUFFLE_SUCCESS, payload: shuffledArray });
}

export default function* watchShuffleSaga() {
  yield takeLatest(SHUFFLE, performShuffle);
}
