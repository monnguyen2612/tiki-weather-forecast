import React from "react";

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Detail from "../Detail/index.js";
import Home from "../Home/index.js";

const Root = (props) => {
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
