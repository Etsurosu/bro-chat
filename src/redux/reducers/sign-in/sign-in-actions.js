import actionsTypes from './sign-in-actions-types';

const actions = {
  signInRequest: payload => ({
    type: actionsTypes.SIGN_IN_REQUEST,
    payload
  }),
  signInSuccess: payload => ({
    type: actionsTypes.SIGN_IN_SUCCESS,
    payload
  }),
  signInFailure: error => ({
    type: actionsTypes.SIGN_IN_FAILURE,
    payload: error,
    error: true
  })
};

export default actions;
