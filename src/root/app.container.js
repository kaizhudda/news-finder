import { connect } from 'react-redux';
import { loadTest } from '../store/actions';
import { selectTest } from '../store/selectors'
import App from './app.ui';

const mapStateToProps = state => ({
  test: selectTest(state)
});

export default connect(mapStateToProps, { loadTest })(App);
