import { SET_QUERY, SET_TAG, SET_RELEVANCE, SET_TIME_RANGE } from './types';

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
};

export const setRelevance = relevance => dispatch => {
  console.log('SET_RELEVANCE', relevance);

  dispatch({
    type: SET_RELEVANCE,
    payload: relevance
  });
};

export const setTimeRange = time => dispatch => {
  console.log('SET_TIME_RANGE', time);

  dispatch({
    type: SET_TIME_RANGE,
    payload: time
  });
};


