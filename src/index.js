import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from './redux/configure-store';
import configureTheme from './configurations/theme';
import * as serviceWorker from './serviceWorker';
import './internationalization/i18n';
import './index.css';

import Core from './components/core';
import Chat from './scenes/chat';
import SignIn from './scenes/sign-in';
import Register from './scenes/register';
import Profile from './scenes/profile';
import Settings from './scenes/settings';

const store = configureStore();
const theme = configureTheme();

render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Core>
          <Switch>
            <Route exact path="/" component={Chat} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/me" component={Profile} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Core>
      </ThemeProvider>
    </Provider>
  </Router>,
  // eslint-disable-next-line
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
