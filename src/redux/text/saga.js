import { put, takeLatest, fork, delay } from "redux-saga/effects";
import axios from "axios";

import {fetchTextSuccessAction} from './actions'
import {
    FETCH_TEXT,
    FETCH_TEXT_PENDING,
    FETCH_TEXT_SUCCESS,
    FETCH_TEXT_FAIL,
  } from "./types.js";

export function* watchFetch() {
    yield takeLatest(
        FETCH_TEXT,
       fetchText
    )
}
function* fetchText() {
    const res = yield axios.get("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json");
    const data = res.data;
    yield put(fetchTextSuccessAction(data.join("")));
    console.log(res);
}