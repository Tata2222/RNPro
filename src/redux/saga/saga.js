import {takeEvery, all} from 'redux-saga/effects';
import {CREATE_HABBIT} from '../habbits/types';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* createHabbit() {
  console.log('watchCreateHabbit');
}

function* watchCreateHabbit() {
  yield takeEvery(CREATE_HABBIT, createHabbit);
}

export function* rootSaga() {
  yield all([helloSaga(), watchCreateHabbit()]);
}
