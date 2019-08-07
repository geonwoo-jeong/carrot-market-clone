import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from "@store/user/types";
import loginRequestAction from "@store/user/actions";

// function loginAPI(loginData) {
//   return fetch("/user/login", loginData);
// }

function* login(action: ReturnType<typeof loginRequestAction>) {
  try {
    console.log(action);
    // const result = yield call(loginAPI, action.payload);
    yield delay(2000);
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
