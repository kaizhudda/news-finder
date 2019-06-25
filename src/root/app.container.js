import { connect } from 'react-redux';
import App from './app.ui';

const mapStateToProps = state => ({
  // test: selectTest(state)
});

export default connect(mapStateToProps)(App);
