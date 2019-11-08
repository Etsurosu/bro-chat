import { combineReducers } from 'redux';
import registerReducer from './reducers/register/register-reducer';
import signInReducer from './reducers/sign-in/sign-in-reducer';
import settingsReducer from './reducers/settings/settings-reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  isConnected: signInReducer,
  theme: settingsReducer
});

export default rootReducer;
