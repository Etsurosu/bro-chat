import { connect } from 'react-redux';
import signInActions from '../../redux/reducers/sign-in/sign-in-actions';
import Profile from './profile';

const mapDispatchToProps = dispatch => ({
  signOut: payload => dispatch(signInActions.signInFailure(payload))
});

const ProfileContainer = connect(
  null,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;
