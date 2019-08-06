import { all, fork, put, takeLatest } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./types";

function* login() {
  console.log("hi");
  try {
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogIn)]);
}
