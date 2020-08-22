import {
    FETCH_TEXT,
    FETCH_TEXT_SUCCESS
} from './types.js'

export const fetchTexts = () => ({
    type: FETCH_TEXT
})

export const fetchTextSuccessAction = (data) =>({
    type: FETCH_TEXT_SUCCESS,
    payload: data
})