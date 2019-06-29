import { connect } from 'react-redux';
import { setTag, setRelevance, setTimeRange } from '../../store/actions/filter-actions';
import SubHeader from './subheader.ui';

export default connect(null, { setTag, setRelevance, setTimeRange })(SubHeader);
