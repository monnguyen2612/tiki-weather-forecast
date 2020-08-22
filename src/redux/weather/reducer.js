import { Reducer } from "redux";
import {
  FETCH_WEATHER_OF_CITY,
  FETCH_WEATHER_OF_CITY_PENDING,
  FETCH_WEATHER_OF_CITY_SUCCESS,
  FETCH_WEATHER_OF_CITY_FAIL,
} from "./types.js";

const initialState = {
  cityweather: "",
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
      state = { ...state, cityweather: "", flag: false };
      break;
    default:
        break;
  }
  console.log("textReducers", state);
  console.log("actiontypes", action.type);
  return state;
};
