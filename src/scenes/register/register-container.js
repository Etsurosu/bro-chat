import { connect } from 'react-redux';
import signInActions from '../../redux/reducers/sign-in/sign-in-actions';
import Register from './register';

const mapDispatchToProps = dispatch => ({
  signInSuccess: payload => dispatch(signInActions.signInSuccess(payload))
});

const RegisterContainer = connect(
  null,
  mapDispatchToProps
)(Register);

export default RegisterContainer;
