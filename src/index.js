import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Core from "./components/core";
import Chat from "./scenes/chat";
import Login from "./scenes/login";
import Register from "./scenes/register";
import Profile from "./scenes/profile";
import Settings from "./scenes/settings";

ReactDOM.render(
  <Router>
    <>
      <Core>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
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
