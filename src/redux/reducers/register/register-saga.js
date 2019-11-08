import { all, call, takeLatest, put } from 'redux-saga/effects';
import registerActionsTypes from './register-actions-types';
import registerActions from './register-actions';
import registerRequest from './register-requests';

function* registerRequestSaga(action) {
  console.log('API request: ' + JSON.stringify(action.payload));
  try {
    const { data: payload } = yield call(registerRequest.register, action.payload);
    console.log('call payload: ' + payload);
    yield put(registerActions.registerSuccess(payload));
  } catch (error) {
    console.log('call error: ' + JSON.stringify(error.request));
    const { code: errorCode = 'UNKNOWN' } = ((error || {}).response || {}).data || {};
    yield put(registerActions.registerFailure({ errorCode }));
  }
}

const registerSaga = all([takeLatest(registerActionsTypes.REGISTER_REQUEST, registerRequestSaga)]);

export default registerSaga;
