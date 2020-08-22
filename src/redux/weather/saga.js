import { put, takeLatest, fork, delay } from "redux-saga/effects";
import axios from "axios";

import { fetchWeatherSuccessAction, fetchWeatherOfCitiesSuccessAction } from "./actions";
import { FETCH_WEATHER_OF_CITY, FETCH_WEATHER_OF_CITIES } from "./types.js";

export function* watchFetch() {
  yield takeLatest(FETCH_WEATHER_OF_CITY, fetchWeather);
  yield takeLatest(FETCH_WEATHER_OF_CITIES, fetchWeatherOfCities);
}

function* fetchWeather(action) {
  console.log(action);
  const res = yield axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=76d9f973716785e597cc6210d5523de5`
  );
  const data = res.data;
  console.log(data);
  yield put(fetchWeatherSuccessAction(data));
  console.log(res, action.payload);
}

function* fetchWeatherOfCities(action) {
  const promises = action.payload.map((citiesname) => {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${citiesname}&appid=76d9f973716785e597cc6210d5523de5`
    );
  });
  const res = yield Promise.all(promises);
  res.map(item => item.data);
  console.log('data saga',res);
  yield put(fetchWeatherOfCitiesSuccessAction(res.map(item => item.data)));
  console.log(res, action.payload);
}
