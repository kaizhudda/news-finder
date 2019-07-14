import { connect } from 'react-redux';
import { fetchNewsData } from '../../store/actions/news-actions';
import { selectHits, selectFilters, selectStatus } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  hits: selectHits(state),
  filters: selectFilters(state),
  status: selectStatus(state),
});

export default connect(mapStateToProps, { fetchNewsData })(NewsResults);
