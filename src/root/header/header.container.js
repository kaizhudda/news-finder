import { connect } from 'react-redux';
import { fetchNewsData, setQuery } from '../../store/actions';
import Header from './header.ui';

export default connect(null, { fetchNewsData, setQuery })(Header);
