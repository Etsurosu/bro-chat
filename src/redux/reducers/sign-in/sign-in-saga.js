import { all, call, takeLatest, put } from 'redux-saga/effects';
import signInActionsTypes from './sign-in-actions-types';
import signInActions from './sign-in-actions';
import signInRequest from './sign-in-requests';

function* signInRequestSaga(action) {
  console.log('API request');
  try {
    const { data: payload } = yield call(signInRequest.signIn, action.payload);
    console.log('call payload: ' + payload);
    yield put(signInActions.signInSuccess(payload));
  } catch (error) {
    console.log('call error: ' + JSON.stringify(error.request));
    const { code: errorCode = 'UNKNOWN' } = ((error || {}).response || {}).data || {};
    yield put(signInActions.signInFailure({ errorCode }));
  }
}

const signInSaga = all([takeLatest(signInActionsTypes.SIGN_IN_REQUEST, signInRequestSaga)]);

export default signInSaga;
