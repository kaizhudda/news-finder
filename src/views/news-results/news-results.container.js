import { connect } from 'react-redux';
import { fetchNewsData } from '../../store/actions';
import { selectHits } from '../../store/selectors';
import NewsResults from './news-results.ui';

const mapStateToProps = state => ({
  hits: selectHits(state),
});

export default connect(mapStateToProps, { fetchNewsData })(NewsResults);
