import { connect } from 'react-redux';
import { fetchUserDetails } from '../../store/actions/users-actions';
import { selectStatus, selectUserData } from '../../store/selectors';
import Author from './author.ui';

const mapStateToProps = state => ({
  user: selectUserData(state),
  status: selectStatus(state),
});

export default connect(mapStateToProps, { fetchUserDetails })(Author);
