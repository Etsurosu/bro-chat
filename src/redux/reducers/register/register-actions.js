import registerActionsTypes from './register-actions-types';

const actions = {
  registerRequest: payload => ({
    type: registerActionsTypes.REGISTER_REQUEST,
    payload
  }),
  signInSuccess: payload => ({
    type: registerActionsTypes.REGISTER_SUCCESS,
    payload
  }),
  signInFailure: error => ({
    type: registerActionsTypes.REGISTER_FAILURE,
    payload: error,
    error: true
  })
};

export default actions;
