import { connect } from 'react-redux';
// eslint-disable-next-line
import Header from './header';

const mapStateToProps = state => {
  return { isConnected: state.isConnected };
};

export default connect(
  mapStateToProps,
  null
)(Header);
