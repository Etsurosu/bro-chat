import signInActionsTypes from './sign-in-actions-types';

const actions = {
  signInRequest: payload => ({
    type: signInActionsTypes.SIGN_IN_REQUEST,
    payload
  }),
  signInSuccess: payload => ({
    type: signInActionsTypes.SIGN_IN_SUCCESS,
    payload
  }),
  signInFailure: error => ({
    type: signInActionsTypes.SIGN_IN_FAILURE,
    payload: error,
    error: true
  })
};

export default actions;
