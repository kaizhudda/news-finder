import { connect } from 'react-redux';
import { fetchNewsData } from '../../store/actions';
import { selectHits, selectFilters } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  hits: selectHits(state),
  filters: selectFilters(state)
});

export default connect(mapStateToProps, { fetchNewsData })(NewsResults);
