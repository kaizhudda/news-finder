import { SET_QUERY, SET_TAG, SET_RELEVANCE, SET_TIME_RANGE, SET_PAGE } from './types';
import { selectPageNumber } from '../selectors/index';
import moment from 'moment';

export const setQuery = query => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload: query
  });
};

export const setTag = tag => dispatch => {
  dispatch({
    type: SET_TAG,
    payload: tag === 'all' ? '' : tag
  });
};

export const setRelevance = relevance => dispatch => {
  dispatch({
    type: SET_RELEVANCE,
    payload: relevance
  });
};

export const setTimeRange = time => dispatch => {
  dispatch({
    type: SET_TIME_RANGE,
    payload: convertTimeToUnix(time)
  });
};

const convertTimeToUnix = time => {
  switch (time) {
    case 'last_24h':
      return time = moment().subtract(1, 'days').unix();
    case 'past_week':
      return time = moment().subtract(1, 'weeks').unix();
    case 'past_month':
      return time = moment().subtract(1, 'months').unix();
    case 'past_year':
      return time = moment().subtract(1, 'year').unix();
    default:
      return time = null;
  }
};

export const setPageUp = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_PAGE,
    payload: selectPageNumber(state).page + 1
  });
};

export const setPageDown = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_PAGE,
    payload: parseInt(selectPageNumber(state).page) - 1
  });
};
