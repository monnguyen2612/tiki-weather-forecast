import { all, fork } from "redux-saga/effects";
import { watchFetch } from "./text/saga";

export default function* rootSaga() {
  yield all([fork(watchFetch)]);
}
