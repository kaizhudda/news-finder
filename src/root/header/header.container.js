import { connect } from 'react-redux';
import { setQuery } from '../../store/actions/filter-actions';
import Header from './header.ui';

export default connect(null, { setQuery })(Header);
