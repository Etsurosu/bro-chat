import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Core from "./components/core";
import Chat from "./scenes/chat";
import Profile from "./scenes/profile";
import Settings from "./scenes/settings";

ReactDOM.render(
  <Router>
    <>
      <Core>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/me" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Core>
    </>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/** 
 * 
import Auth from "./scenes/auth";
import Profile from "./scenes/profile"; <Route exact path="/auth" component={Auth} />
        <Route exact path="/me" component={Profile} /> */
