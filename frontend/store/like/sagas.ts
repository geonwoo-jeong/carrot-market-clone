import { all, fork, put, takeLatest } from "redux-saga/effects";
import {
  LIKE_REQUEST,
  UNLIKE_REQUEST,
  LIKE_FAILURE,
  LIKE_SUCCESS,
  UNLIKE_FAILURE,
  UNLIKE_SUCCESS,
} from "@store/like/types";

// function likeAPI(likeData) {}

function* like() {
  try {
    yield put({
      type: LIKE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LIKE_FAILURE,
    });
  }
}

// function unlikeAPI(unlikeData) {}

function* unlike() {
  try {
    yield put({
      type: UNLIKE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: UNLIKE_FAILURE,
    });
  }
}

function* watchLike() {
  yield takeLatest(LIKE_REQUEST, like);
}

function* watchUnlike() {
  yield takeLatest(UNLIKE_REQUEST, unlike);
}

export default function* likeSaga() {
  yield all([fork(watchLike), fork(watchUnlike)]);
}
