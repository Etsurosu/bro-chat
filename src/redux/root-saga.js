import { all } from 'redux-saga/effects';
import signInSaga from './reducers/sign-in/sign-in-saga';

function* rootSaga() {
  yield all([signInSaga]);
}

export default rootSaga;
