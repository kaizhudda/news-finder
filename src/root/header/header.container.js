import { connect } from 'react-redux';
import { setQuery } from '../../store/actions';
import Header from './header.ui';

export default connect(null, { setQuery })(Header);
