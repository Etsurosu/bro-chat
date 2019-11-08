import { all } from 'redux-saga/effects';
import registerSaga from './reducers/register/register-saga';
import signInSaga from './reducers/sign-in/sign-in-saga';

function* rootSaga() {
  yield all([registerSaga, signInSaga]);
}

export default rootSaga;
