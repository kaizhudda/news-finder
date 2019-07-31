import { STATUS, FETCH_COMMENTS } from './types';
import newsSearchAPI from '../../apis/news-search';

export const fetchComments = storyId => async dispatch => {
  dispatch({ type: STATUS, payload: 'LOADING' });
  try {
    const response = await newsSearchAPI.get(`search?tags=comment,story_${storyId}`);
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data
    });
    dispatch({ type: STATUS, payload: '' });
  } catch (err) {
    dispatch({ type: STATUS, payload: 'ERROR' });
  }
};
