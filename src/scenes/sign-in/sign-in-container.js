import { connect } from 'react-redux';
import signInActions from '../../redux/reducers/sign-in/sign-in-actions';
import SignIn from './sign-in';

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload)),
  signInSuccess: payload => dispatch(signInActions.signInSuccess(payload))
});

const SignInContainer = connect(
  null,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;
