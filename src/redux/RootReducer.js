import { combineReducers } from "redux";
import { textReducer } from "./weather/reducer.js";
const rootReducers = combineReducers({text: textReducer});
export default rootReducers;
