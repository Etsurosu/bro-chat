import { connect } from 'react-redux';
import settingsActions from '../../redux/reducers/settings/settings-actions';
import Settings from './settings';

const mapStateToProps = state => {
  return { currentTheme: state.theme };
};

const mapDispatchToProps = dispatch => ({
  setTheme: payload => dispatch(settingsActions.setTheme(payload))
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
