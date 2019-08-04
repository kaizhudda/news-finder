import { connect } from 'react-redux';
import { fetchNewsData } from '../../store/actions/news-actions';
import { setPageUp, setPageDown } from '../../store/actions/filter-actions';
import { selectHits, selectFilters, selectStatus, selectPageNumber } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  hits: selectHits(state),
  filters: selectFilters(state),
  status: selectStatus(state),
  pagination: selectPageNumber(state),
});

export default connect(mapStateToProps, { fetchNewsData, setPageUp, setPageDown })(NewsResults);
