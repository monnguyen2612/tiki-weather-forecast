import {
  FETCH_WEATHER_OF_CITY,
  FETCH_WEATHER_OF_CITY_SUCCESS,
  FETCH_WEATHER_OF_CITY_FAIL,
  FETCH_WEATHER_OF_CITIES,
  FETCH_WEATHER_OF_CITIES_SUCCESS,
  FETCH_WEATHER_OF_CITIES_FAIL,
  ADD_CITY,
  ADD_CITY_SUCCESS,
  REMOVE_CITY,
  REMOVE_CITY_SUCCESS,
  FETCH_WEATHER_DETAIL_OF_CITY,
  FETCH_WEATHER_DETAIL_OF_CITY_SUCCESS,
} from "./types.js";

const initialState = {
  cityweather: {},
  listWeatherOfCities: [],
  listCities: JSON.parse(localStorage.getItem("listCities"))||[],
  flag: false,
};
export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_OF_CITY:
      break;
    case FETCH_WEATHER_OF_CITY_SUCCESS:
      state = { ...state, cityweather: action.payload, flag: true };
      break;
    case FETCH_WEATHER_OF_CITY_FAIL:
      state = { ...state, cityweather: {}, flag: false };
      break;
    case FETCH_WEATHER_OF_CITIES:
      break;
    case FETCH_WEATHER_OF_CITIES_SUCCESS:
      state = { ...state, listWeatherOfCities: action.payload, flag: true };
      break;
    case FETCH_WEATHER_OF_CITIES_FAIL:
      state = { ...state, listWeatherOfCities: {}, flag: false };
      break;
    case ADD_CITY:
      state = { ...state, listCities: [...state.listCities, action.payload] };
      break;
    case ADD_CITY_SUCCESS:
      state = { ...state, listWeatherOfCities: action.payload, flag: true };
      break;
    case REMOVE_CITY:
      state = {
        ...state,
        listCities: action.payload,
      };
      break;
    case REMOVE_CITY_SUCCESS:
      state = { ...state, listWeatherOfCities: action.payload, flag: true };
      break;
    case FETCH_WEATHER_DETAIL_OF_CITY:
      break;
    case FETCH_WEATHER_DETAIL_OF_CITY_SUCCESS:
      state = { ...state, detailWeatherOfCity: action.payload, flag: true };
      break;
    default:
      break;
  }
  return state;
};
