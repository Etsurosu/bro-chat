import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';
import * as serviceWorker from './serviceWorker';
import './internationalization/i18n';
import './index.css';

import Root from './root-container';

const store = configureStore();

console.log('store getstate: ' + JSON.stringify(store.getState()));
store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
