import { STATUS, FETCH_USER } from './types';
import newsSearchAPI from '../../apis/news-search';

export const fetchUserDetails = username => async dispatch => {
  dispatch({ type: STATUS, payload: 'LOADING' });
  try {
    const response = await newsSearchAPI.get(`users/${username}`);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
    dispatch({ type: STATUS, payload: '' });
  } catch (err) {
    dispatch({ type: STATUS, payload: 'ERROR' });
  }
};
