import React, { useEffect, useState } from "react";

import { BrowserRouter as Router,
   Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Detail from '../Detail/index.js'
import Home from '../Home/index.js'

const Root = (props) => {
  const setTokens = () => {
    localStorage.getItem("cities");
  };

  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="" component={Home} />
      </Switch>
    </div>
  );
};
export default withRouter((props) => <Root {...props} />);
