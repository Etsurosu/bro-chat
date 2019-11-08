import { combineReducers } from 'redux';
import signInReducer from './reducers/sign-in/sign-in-reducer';
import settingsReducer from './reducers/settings/settings-reducer';

const rootReducer = combineReducers({
  isConnected: signInReducer,
  theme: settingsReducer
});

export default rootReducer;
