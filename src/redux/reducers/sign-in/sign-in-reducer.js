import actionTypes from './sign-in-actions-types';

function signInReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return null;
    case actionTypes.SIGN_IN_SUCCESS:
      return true;
    case actionTypes.SIGN_IN_FAILURE:
      return false;
    default:
      return state;
  }
}

export default signInReducer;
