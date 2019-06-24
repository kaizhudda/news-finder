import { connect } from 'react-redux';
import { setQuery } from '../../store/actions';
import SubHeader from './subheader.ui';

export default connect(null, { setQuery })(SubHeader);
