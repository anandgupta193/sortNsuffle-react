import { takeLatest, put, call } from 'redux-saga/effects';
import { SHUFFLE, SHUFFLE_SUCCESS } from '../actionTypes/ShuffleActionTypes';
import shuffle from '../utils/Shuffle';
import CARDS_DATA from '../constants/CardsConstants';

function* performShuffle() {
  const shuffledArray = yield call(shuffle, CARDS_DATA);
  yield put({ type: SHUFFLE_SUCCESS, payload: shuffledArray });
}

export default function* watchShuffleSaga() {
  yield takeLatest(SHUFFLE, performShuffle);
}
