import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  fetchWeatherSuccessAction,
  fetchWeatherOfCitiesSuccessAction,
  addCitySuccessAction,
  removeCitySuccessAction,
  fetchWeatherDetailSuccessAction,
} from "./actions";
import {
  FETCH_WEATHER_OF_CITY,
  FETCH_WEATHER_OF_CITIES,
  ADD_CITY,
  REMOVE_CITY,
  FETCH_WEATHER_DETAIL_OF_CITY,
} from "./types.js";

export function* watchFetch() {
  yield takeLatest(FETCH_WEATHER_OF_CITY, fetchWeather);
  yield takeLatest(FETCH_WEATHER_OF_CITIES, fetchWeatherOfCities);
  yield takeLatest(ADD_CITY, addCity);
  yield takeLatest(REMOVE_CITY, removeCity);
  yield takeLatest(FETCH_WEATHER_DETAIL_OF_CITY, fetchWeatherDetail);
}

function* fetchWeather(action) {
  const res = yield axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=76d9f973716785e597cc6210d5523de5`
  );
  const data = res.data;
  yield put(fetchWeatherSuccessAction(data));
}

function* fetchWeatherOfCities(action) {
  const promises = action.payload.map((citiesname) => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citiesname}&appid=76d9f973716785e597cc6210d5523de5`
    );
  });
  const res = yield Promise.all(promises);
  res.map((item) => item.data);
  yield put(fetchWeatherOfCitiesSuccessAction(res.map((item) => item.data)));
}

function* addCity(action) {
  const promises = action.payload.map((citiesname) => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citiesname}&appid=76d9f973716785e597cc6210d5523de5`
    );
  });
  const res = yield Promise.all(promises);
  res.map((item) => item.data);
  yield put(addCitySuccessAction(res.map((item) => item.data)));
}

function* removeCity(action) {
  const promises = action.payload.map((citiesname) => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citiesname}&appid=76d9f973716785e597cc6210d5523de5`
    );
  });
  const res = yield Promise.all(promises);
  res.map((item) => item.data);
  yield put(removeCitySuccessAction(res.map((item) => item.data)));
}

function* fetchWeatherDetail(action) {
  const res = yield axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&mode=json&appid=76d9f973716785e597cc6210d5523de5`
  );
  const data = res.data;
  yield put(fetchWeatherDetailSuccessAction(data));
}
