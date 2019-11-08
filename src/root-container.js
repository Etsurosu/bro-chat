import { connect } from 'react-redux';
// eslint-disable-next-line
import Root from './root';

const mapStateToProps = state => {
  return { currentTheme: state.theme };
};

export default connect(
  mapStateToProps,
  null
)(Root);
