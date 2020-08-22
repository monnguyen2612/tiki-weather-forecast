import React from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from './store'
import Sample from './components/Sample'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sample/>
      </div>
    </Provider>
  );
}

export default App;
