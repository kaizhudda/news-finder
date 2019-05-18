import { connect } from 'react-redux';
import { loadTest } from '../../store/actions';
import { selectTest } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  test: selectTest(state)
});

export default connect(mapStateToProps, { loadTest })(NewsResults);
