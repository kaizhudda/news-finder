import { connect } from 'react-redux';
import { fetchComments } from '../../store/actions/comments-actions';
import { selectStatus, selectCommentsThread } from '../../store/selectors';
import Comments from './comments.ui';

const mapStateToProps = state => ({
  comments: selectCommentsThread(state),
  status: selectStatus(state),
});

export default connect(mapStateToProps, { fetchComments })(Comments);
