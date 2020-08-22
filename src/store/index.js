import { applyMiddleware, createStore, Store, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "../redux/RootReducer";
import rootSaga from "../redux/RootSaga";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducers, devTools);
export default store;
sagaMiddleware.run(rootSaga);
