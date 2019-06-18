import { connect } from 'react-redux';
import { loadTest } from '../../store/actions';
import { selectTest, selectHits } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  test: selectTest(state),
  hits: selectHits(state),
});

export default connect(mapStateToProps, { loadTest })(NewsResults);
