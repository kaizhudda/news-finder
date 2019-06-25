import { connect } from 'react-redux';
import { setTag } from '../../store/actions/filter-actions';
import SubHeader from './subheader.ui';

export default connect(null, { setTag })(SubHeader);
