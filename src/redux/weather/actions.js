import {
    FETCH_WEATHER_OF_CITY,
    FETCH_WEATHER_OF_CITY_SUCCESS,
    FETCH_WEATHER_OF_CITIES,
    FETCH_WEATHER_OF_CITIES_SUCCESS
} from './types.js'

export const fetchWeather = (keyword) => ({
    type: FETCH_WEATHER_OF_CITY,
    payload: keyword
})

export const fetchWeatherSuccessAction = (data) =>({
    type: FETCH_WEATHER_OF_CITY_SUCCESS,
    payload: data
})


export const fetchWeatherOfCities = (list) => ({
    type: FETCH_WEATHER_OF_CITIES,
    payload: list
})

export const fetchWeatherOfCitiesSuccessAction = (data) =>({
    type: FETCH_WEATHER_OF_CITIES_SUCCESS,
    payload: data
})