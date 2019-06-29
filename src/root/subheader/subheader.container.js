import { connect } from 'react-redux';
import { setTag, setRelevance } from '../../store/actions/filter-actions';
import SubHeader from './subheader.ui';

export default connect(null, { setTag, setRelevance })(SubHeader);
