import { combineReducers } from 'redux';
import signInReducer from './reducers/sign-in/sign-in-reducer';

const rootReducer = combineReducers({
  loggedIn: signInReducer
});

export default rootReducer;
