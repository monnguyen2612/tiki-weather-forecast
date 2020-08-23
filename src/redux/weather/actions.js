import {
  FETCH_WEATHER_OF_CITY,
  FETCH_WEATHER_OF_CITY_SUCCESS,
  FETCH_WEATHER_OF_CITIES,
  FETCH_WEATHER_OF_CITIES_SUCCESS,
  ADD_CITY_SUCCESS,
  ADD_CITY,
  ADD_CITY_FAIL,
  REMOVE_CITY_SUCCESS,
  REMOVE_CITY_FAIL,
  REMOVE_CITY,
  FETCH_WEATHER_DETAIL_OF_CITY,
  FETCH_WEATHER_DETAIL_OF_CITY_SUCCESS,
} from "./types.js";

export const fetchWeather = (keyword) => ({
  type: FETCH_WEATHER_OF_CITY,
  payload: keyword,
});

export const fetchWeatherSuccessAction = (data) => ({
  type: FETCH_WEATHER_OF_CITY_SUCCESS,
  payload: data,
});

export const fetchWeatherOfCities = (list) => ({
  type: FETCH_WEATHER_OF_CITIES,
  payload: list,
});

export const fetchWeatherOfCitiesSuccessAction = (data) => ({
  type: FETCH_WEATHER_OF_CITIES_SUCCESS,
  payload: data,
});

export const addCity = (city) => {
  const lC = JSON.parse(localStorage.getItem("listCities"));
  if (!lC.includes(city)) {
    const newlC = [...lC, city];
    localStorage.setItem("listCities", JSON.stringify(newlC));
    return {
      type: ADD_CITY,
      payload: newlC,
    };
  } else
    return {
      type: ADD_CITY_FAIL,
    };
};

export const addCitySuccessAction = (data) => ({
  type: ADD_CITY_SUCCESS,
  payload: data,
});

export const removeCity = (city) => {
  const lC = JSON.parse(localStorage.getItem("listCities"));
  if (lC.includes(city)) {
    const newlC = lC.filter((item) => item !== city);
    localStorage.setItem("listCities", JSON.stringify(newlC));
    return {
      type: REMOVE_CITY,
      payload: newlC,
    };
  } else
    return {
      type: REMOVE_CITY_FAIL,
    };
};

export const removeCitySuccessAction = (data) => ({
  type: REMOVE_CITY_SUCCESS,
  payload: data,
});

export const fetchWeatherDetail = (city) => ({
  type: FETCH_WEATHER_DETAIL_OF_CITY,
  payload: city,
});

export const fetchWeatherDetailSuccessAction = (data) => ({
  type: FETCH_WEATHER_DETAIL_OF_CITY_SUCCESS,
  payload: data,
});
