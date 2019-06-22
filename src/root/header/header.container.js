import { connect } from 'react-redux';
import { fetchNewsData } from '../../store/actions';
import Header from './header.ui';

export default connect(null, { fetchNewsData })(Header);
