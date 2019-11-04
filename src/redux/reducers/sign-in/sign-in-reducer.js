import signInActionTypes from './sign-in-actions-types';

const signInReducer = (state = false, action) => {
  switch (action.type) {
    case signInActionTypes.SIGN_IN_REQUEST:
      return null;
    case signInActionTypes.SIGN_IN_SUCCESS:
      return true;
    case signInActionTypes.SIGN_IN_FAILURE:
      return false;
    default:
      return state;
  }
};

export default signInReducer;
