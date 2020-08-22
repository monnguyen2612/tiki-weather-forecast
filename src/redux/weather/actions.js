import {
    FETCH_WEATHER_OF_CITY,
    FETCH_WEATHER_OF_CITY_SUCCESS
} from './types.js'

export const fetchWeather = (keyword) => ({
    type: FETCH_WEATHER_OF_CITY,
    payload: keyword
})

export const fetchWeatherSuccessAction = (data) =>({
    type: FETCH_WEATHER_OF_CITY_SUCCESS,
    payload: data
})