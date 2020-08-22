import { combineReducers } from "redux";
import { textReducer } from "./text/reducer.js";
const rootReducers = combineReducers({text: textReducer});
export default rootReducers;
