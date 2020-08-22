import { put, takeLatest, fork, delay } from "redux-saga/effects";
import axios from "axios";

import { fetchWeatherSuccessAction } from "./actions";
import { FETCH_WEATHER_OF_CITY } from "./types.js";

export function* watchFetch() {
  yield takeLatest(FETCH_WEATHER_OF_CITY, fetchWeather);
}
function* fetchWeather(action) {
    console.log(action)
  const res = yield axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=5e530d8d37d01c0a8823933ade83f304`
  );
  const data = res.data;
  console.log(data)
  yield put(fetchWeatherSuccessAction(JSON.stringify(data)));
  console.log(res, action.payload);
}
