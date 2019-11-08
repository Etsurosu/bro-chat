import settingsActionsTypes from './settings-actions-types';

const actions = {
  setTheme: payload => ({
    type: settingsActionsTypes.SET_THEME,
    payload
  })
};

export default actions;
