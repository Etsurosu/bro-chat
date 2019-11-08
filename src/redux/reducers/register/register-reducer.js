import registerActionTypes from './register-actions-types';

const registerReducer = (state = false, action) => {
  switch (action.type) {
    case registerActionTypes.REGISTER_REQUEST:
      return null;
    case registerActionTypes.REGISTER_SUCCESS:
      return true;
    case registerActionTypes.REGISTER_FAILURE:
      return false;
    default:
      return state;
  }
};

export default registerReducer;
