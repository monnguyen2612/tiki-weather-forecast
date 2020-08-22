import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Root from "./containers/Root";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="loading">
        <Router>
          <div className="App">
            <Root />
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
