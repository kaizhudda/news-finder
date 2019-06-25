import { SET_QUERY, SET_TAG } from './types';

export const setQuery = query => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload: query
  });
};

export const setTag = tag => dispatch => {
  console.log('SET_TAG', tag);

  dispatch({
    type: SET_TAG,
    payload: tag === 'all' ? '' : tag
  });
}
