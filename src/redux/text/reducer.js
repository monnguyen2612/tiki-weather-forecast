import { Reducer } from "redux";
import {
  FETCH_TEXT,
  FETCH_TEXT_PENDING,
  FETCH_TEXT_SUCCESS,
  FETCH_TEXT_FAIL,
} from "./types.js";

const initialState = {
  text: "",
  flag: false,
};
export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      break;
    case FETCH_TEXT_SUCCESS:
      state = { ...state, text: action.payload, flag: true };
      break;
    case FETCH_TEXT_FAIL:
      state = { ...state, text: "", flag: false };
      break;
    default:
        break;
  }
  console.log("textReducers", state);
  console.log("actiontypes", action.type);
  return state;
};
