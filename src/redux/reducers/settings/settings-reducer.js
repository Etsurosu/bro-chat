import settingsActionTypes from './settings-actions-types';

const settingsReducer = (state = 'default', action) => {
  switch (action.type) {
    case settingsActionTypes.SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default settingsReducer;
