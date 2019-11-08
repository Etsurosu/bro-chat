import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureTheme from './configurations/theme';

import Core from './components/core';
import Chat from './scenes/chat';
import SignIn from './scenes/sign-in';
import Register from './scenes/register';
import Profile from './scenes/profile';
import Settings from './scenes/settings';

const theme = configureTheme();

const Root = ({ currentTheme }) => (
  <Router>
    <ThemeProvider theme={currentTheme === 'default' ? theme.default : theme.dark}>
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
  </Router>
);

Root.propTypes = {
  currentTheme: PropTypes.string.isRequired
};

export default Root;
